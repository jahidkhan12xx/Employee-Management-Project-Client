import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/config";
import axios from "axios";



export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    

    const [user,setUser] = useState("Jahid");
    const [loading,setLoading] = useState(true);


    const register = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : photo,
        })
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)

            
        })
        return()=>{
            return unSubscribe();
        }
    },[])




    const authInfo = {
        user,
        register,
        login,
        logOut,
        updateUser

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;