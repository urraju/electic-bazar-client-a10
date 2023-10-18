
import React, { useContext } from 'react'
import { AuthProvider } from '../AuthContext/AuthContext'

const useAuth = () => {
     const all = useContext(AuthProvider)
     return all;
}

export default useAuth