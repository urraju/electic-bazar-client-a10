import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../MangeAuth/useAuth";
import useIcon from "../../assets/user.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogOut = () => {
    logout().then().catch();
  };
  const navbar = (
    <>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "loading" : isActive ? "text-sky-500 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "isloading" : isActive ? "text-sky-500 underline" : ""
        }
        to="/mycard"
      >
        My Card
      </NavLink>
      <NavLink
        className={({ isActive, isLoading }) =>
          isLoading ? "isloading" : isActive ? "text-sky-500 underline" : ""
        }
        to="/addproduct"
      >
        Add Product
      </NavLink>
    </>
  );

  return (
    <div className="w-full px-6 absolute top-0 z-30 md:px-0">
      <div className=" w-full md:w-9/12 lg:w-9/12   mx-auto rounded-full mt-6   bg-black px-3">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn text-rose-500 btn-ghost   lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-gradient-to-t to-violet-700 from-black w-52 rounded border border-gradient-to-tr  border-gray-600 font-normal uppercase font-roboto gap-5  text-white md:text-white lg:text-white "
              >
                {navbar}
              </ul>
            </div>
            <NavLink to="/" className="  ">
              <div className="flex items-center">
                <img
                  className="w-24 hidden lg:block md:block "
                  src={logo}
                  alt=""
                />
                <p className=" md:text-2xl  lg:block md:block  md:first-letter:text-5xl first-letter:text-sky-400 font-philospar font-bold font-bebas text-white">
                  Electic Bz
                </p>
              </div>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-[14px] font-normal uppercase font-roboto gap-5 text-white ">
              {navbar}
            </ul>
          </div>

          <div className="navbar-end flex gap-2 items-center">
            <div>
              <DarkMode />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user ? user.photoURL : useIcon} alt="" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-black text-white  w-56 rounded-lg"
              >
                <li>{user ? user.displayName : ""}</li>
                <li>{user ? user.email : ""}</li>
              </ul>
            </div>

            {user ? (
              <button
                onClick={handleLogOut}
                className="text-white font-philospar uppercase bg-sky-500  text-[12px] md:py-1 md:text-[16px] px-4  rounded py-[3px]"
              >
                Sing out
              </button>
            ) : (
              <Link to="/login">
                <button className="text-white md:py-1 text-[13px] uppercase font-philospar bg-sky-500 px-5 md:text-[16px] rounded py-[3px]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
