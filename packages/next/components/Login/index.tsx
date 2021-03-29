import { useWeb3React } from "@web3-react/core"
import { useLogin, useUser } from "../../context/UserContext"

const Login: React.FC = () => {
  const login = useLogin()
  const user = useUser()
  const {chainId} = useWeb3React()
  if(user){
    return (
      <div>
        Connected as: {user.address} - Network: {chainId}
      </div>
    )
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login()}>Login with Metamask</button>
    </div>
  )
}
export default Login