import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/config";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext();




const AuthProvider = ({children}) => {

    const axiosPublic = useAxiosPublic();
    

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
            if (currentUser) {
               
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                
                localStorage.removeItem('access-token');
                setLoading(false);
            }

            
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