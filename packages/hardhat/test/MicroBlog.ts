/* eslint-disable func-names */
import { expect } from "chai";
import { MockContract } from "ethereum-waffle";
import { deployments, ethers } from "hardhat";
import { MicroBlog } from "../typechain";
import { deploy, deployMock } from "./helpers";

const setup = deployments.createFixture(async () => {
    const admin = await ethers.getNamedSigner("admin");
    const microBlog = (await deploy("MicroBlog", { args: [], connect: admin })) as MicroBlog;
    const mockMicroBlog = await deployMock("MicroBlog", admin);

    return {
        microBlog,
        mockMicroBlog,
    };
});

describe("Unit tests", function () {
    describe("MicroBlog", function () {
        let microBlog: MicroBlog;
        let mockGreeter: MockContract;

        beforeEach(async function () {
            const deployment = await setup();
            microBlog = deployment.microBlog;
            mockGreeter = deployment.mockMicroBlog;
        });

        it("Posting Content will generate an event Post with arg the address and the string", async function () {
            const post = (await microBlog.post("Hey Now, you're a rock star", ethers.constants.HashZero));
            const res = await post.wait()
            const postEvent = res?.events && res.events[0]
            expect(postEvent?.event === "Post")
            expect(postEvent?.args?.[0]).to.equal(await microBlog.signer.getAddress())
            expect(postEvent?.args?.[1]).to.equal("Hey Now, you're a rock star")
        });

        it("Replying to a post has a third event parameter which is the tx of the previous message", async function () {
            const post = (await microBlog.post("Hey Now, you're a rock star", ethers.constants.HashZero));
            const res = await post.wait()
            const hash = res.transactionHash

            const reply = await (await microBlog.post("Dead meme bro", hash)).wait();
            const postEvent = reply?.events && reply.events[0]

            expect(postEvent?.event === "Post")
            expect(postEvent?.args?.author).to.equal(await microBlog.signer.getAddress())
            expect(postEvent?.args?.content).to.equal("Dead meme bro")
            expect(postEvent?.args?.replyTo).to.equal(hash)
        });

        it("Liking a Post generates an event with the author and the hash of the message liked", async function () {
            const post = (await microBlog.post("Hey Now, you're a rock star", ethers.constants.HashZero));
            const res = await post.wait()
            const hash = res.transactionHash

            const reply = await (await microBlog.like(hash)).wait();
            const postEvent = reply?.events && reply.events[0]
            
            expect(postEvent?.event === "Like")
            expect(postEvent?.args?.author).to.equal(await microBlog.signer.getAddress())
            expect(postEvent?.args?.postId).to.equal(hash)
        });


        it("Disliking a Post generates an event with the author and the hash of the message liked", async function () {
            const post = (await microBlog.post("Hey Now, you're a rock star", ethers.constants.HashZero));
            const res = await post.wait()
            const hash = res.transactionHash

            const reply = await (await microBlog.dislike(hash)).wait();
            const postEvent = reply?.events && reply.events[0]
            
            expect(postEvent?.event === "Dislike")
            expect(postEvent?.args?.author).to.equal(await microBlog.signer.getAddress())
            expect(postEvent?.args?.postId).to.equal(hash)
        });
    });
});
