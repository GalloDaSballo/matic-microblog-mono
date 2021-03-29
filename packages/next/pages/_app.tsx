import { Web3ReactProvider } from "@web3-react/core";
import {Provider, Web3Provider} from "@ethersproject/providers";
import { BalanceContextProvider } from "../context/BalanceContext";
import { UserContextProvider } from "../context/UserContext";
import "../styles/globals.scss";

const getLibrary = (provider: Provider) => {
  return new Web3Provider(provider as any); // this will vary according to whether you use e.g. ethers or web3.js
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <UserContextProvider>
      <BalanceContextProvider>
        <Component {...pageProps} />
      </BalanceContextProvider>
    </UserContextProvider>
    </Web3ReactProvider>

  );
}

export default MyApp;
