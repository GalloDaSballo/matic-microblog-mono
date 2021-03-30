import { useWeb3React } from "@web3-react/core"
import { useLogin, useUser } from "../../context/UserContext"
import styles from "./Login.module.scss"

const Login: React.FC = () => {
  const login = useLogin()
  const user = useUser()
  const {chainId} = useWeb3React()
  if(user){
    return (
      <div className={styles.login}>
        Connected as: {user.address} - Network: {chainId}
      </div>
    )
  }
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <button onClick={() => login()}>Login with Metamask</button>
    </div>
  )
}
export default Login