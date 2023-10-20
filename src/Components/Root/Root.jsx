
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import toast, { Toaster } from "react-hot-toast";
const Root = () => {
    return (
        <div>
            <Toaster/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Root;