

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.config';


export const AuthProvider = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
   const [loading , setLoading] = useState(true)
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const github = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const register = (email, password) => {
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const profile = (userUpdate) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userUpdate);
      };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {unSubscribe()}
    },[])

  const infrom = {
    google,
    github,
    user,
    loading,
    register,
    login,
    logout,
    profile,


  }

    return <AuthProvider.Provider value={infrom}>
        {children}
        </AuthProvider.Provider>
}

export default AuthContext