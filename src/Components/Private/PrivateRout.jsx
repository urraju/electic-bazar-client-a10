import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../MangeAuth/useAuth";

const PrivateRout = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="w-9/12 mx-auto flex justify-center">
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
export default PrivateRout;
