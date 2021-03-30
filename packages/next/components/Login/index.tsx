import { useWeb3React } from "@web3-react/core";
import { useLogin, useUser } from "../../context/UserContext";
import handleConnetionError from "../../utils/handleConnectionError";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const login = useLogin();
  const user = useUser();
  const { chainId, error } = useWeb3React();

  if (error) {
    return <div className={styles.login}>{handleConnetionError(error)}</div>;
  }
  if (user) {
    return (
      <div className={styles.login}>
        Connected as: {user.address} - Network: {chainId}
      </div>
    );
  }
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <button type="button" onClick={() => login()}>
        Login with Metamask
      </button>
    </div>
  );
};
export default Login;
