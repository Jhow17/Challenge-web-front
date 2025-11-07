import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { Navigate } from "react-router-dom";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); 
        });


        return () => {
            unsubscribe();
        };
    }, []);


    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
          
        } catch (error) {
            console.error("Erro no login Google:", error);
        }
    };

 
    const handleExit = async () => {
        try {

            await signOut(auth);
            
           
        } catch (error) {
            console.log(error);
        }
    };

   
    const value = {
        user,
        handleGoogleLogin,
        handleExit,
        loading 
    };

   
    return (
        <AuthContext.Provider value={value}>
            {!loading && children} 
        </AuthContext.Provider>
    );
}


export const useAuth = () => {
    return useContext(AuthContext);
};