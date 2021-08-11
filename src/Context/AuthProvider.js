import React,{useState, useEffect, useContext} from 'react'
import {auth} from "../firebase"
export const AuthContext = React.createContext();
export function Authprovider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [Loading, setLoading] = useState(true);
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logout(email,password){
        return auth.signOut();
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return ()=>{
            //cleanup 
            unsubscribe();
        }
    },[]);

 const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!Loading&&children}
            </AuthContext.Provider>
    )
}