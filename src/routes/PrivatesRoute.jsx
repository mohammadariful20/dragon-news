import { useContext } from "react"
import { AuthContext } from "../authProvider/AuthProvider"
import { Navigate } from "react-router-dom";

export default function PrivatesRoute({children}) {
    const {user}=useContext(AuthContext)
   

    if (user) {
        return children;
    }
  return(<Navigate to='/login'></Navigate>)
}
