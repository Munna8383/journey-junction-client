/* eslint-disable react/prop-types */
import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";
import app from "../../Firebase/firebase.config";


export const AuthContext =createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true)


    const [user,setUser]=useState(null)

   const createUser = (email,password)=>{

    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)
   }

   const updatePhotoAndName = (name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
   }

   const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

    const googleLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
    }

    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser)
            setLoading(false)

        });

        return ()=>{
            unsubscribe()
        }


    },[])



    const authInfo={loading,user,createUser,updatePhotoAndName,login,googleLogin,githubLogin,logout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

            
        </div>
    );
};

export default AuthProvider;