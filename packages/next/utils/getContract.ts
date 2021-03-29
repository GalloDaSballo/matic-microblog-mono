import { Contract } from "@ethersproject/contracts";
import { Signer } from "@ethersproject/abstract-signer";

import mumbaiContract from "@matic-microblog/hardhat/deployments/mumbai/MicroBlog.json";

const getContract = (signer: Signer): Contract =>
  new Contract(mumbaiContract.address, mumbaiContract.abi, signer);
export default getContract;
