import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { MUMBAI_SUBGRAPH_URL } from "./constants";
import { Post } from "../types";

const client = new ApolloClient({
    uri: MUMBAI_SUBGRAPH_URL,
    cache: new InMemoryCache(),
});

/**
 * Load the first 100 posts
 * Adding replyTo loads the first 100 replies
 * @param replyTo 
 * @returns 
 */
export const getFirst100Posts = async (replyTo: string = ""): Promise<Post[]> => {
    const result = await client.query({
        query: gql`
            query posts($reply: String!) {
                posts(
                    orderBy: publishedAtBlock
                    orderDirection: desc
                    where: { replyTo: $reply }
                ) {
                    id
                    publishedAtBlock
                    author
                    content
                    replyTo
                    likes
                    dislikes
                }
            }
        `,
        variables: { reply: replyTo },
    });
    return result.data.posts;
};

export const getPost = async (postId: string): Promise<Post> => {
    const result = await client.query({
        query: gql`
            query posts($postId: String!) {
                posts(
                    orderBy: publishedAtBlock
                    orderDirection: desc
                    where: { id: $postId }
                ) {
                    id
                    publishedAtBlock
                    author
                    content
                    replyTo
                    likes
                    dislikes
                }
            }
        `,
        variables: { postId: postId },
    });
    return result.data.posts[0];
};