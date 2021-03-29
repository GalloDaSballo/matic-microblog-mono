import { BigNumber } from "ethers";
import { createContext, useEffect, useContext } from "react";
import useETHBalance from "../hooks/useETHBalance";
import { useUser } from "./UserContext";

type BalanceContextData = {
  eth: BigNumber | null;
  weth: BigNumber | null;
  allowance: boolean | null;
};

const BalanceContext = createContext<BalanceContextData>({
  eth: null,
  weth: null,
  allowance: null,
});
export default BalanceContext;

export const BalanceContextProvider: React.FC = ({ children }) => {
  const user = useUser();
  const [eth, reloadETH] = useETHBalance(user);

  // Reload balances and allowance every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      reloadETH();
    }, 10000);
    return () => clearInterval(interval);
  }, [reloadETH]);

  return (
    <BalanceContext.Provider
      value={{
        eth,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useAllowance = () => {
  const { allowance } = useContext(BalanceContext);

  return allowance;
};

export const useBalances = () => {
  const { eth, weth } = useContext(BalanceContext);
  return { eth, weth };
};
