import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.init"

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const registerUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const signout = () => {
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      console.log('>----------->',currentUser)
    })
    return ()=>unSubscribe()
  },[user])
  

  const AuthInfo = {//auth informations
    user,
    registerUser,
    loginUser,
    signout
  }
  return (

    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}
