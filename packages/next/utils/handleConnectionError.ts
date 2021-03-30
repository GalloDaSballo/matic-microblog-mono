import { UnsupportedChainIdError } from "@web3-react/core"
const handleConnetionError = (error: Error):string => {
  const isWrongChain = error instanceof UnsupportedChainIdError
  if(isWrongChain){
    return "You are connected to the wrong chain, switch to Mumbai"
  }
  return "There was an issue with connecting to Metamask, make sure you are using Mumbai"
}


export default handleConnetionError