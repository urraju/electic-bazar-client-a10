import React from "react";
import error from "../assets/discount/error.gif";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="w-9/12 mx-auto flex justify-center mt-20">
      <div>
        <Link Link to="/">
          <button className="font-philospar uppercase px-3 py-1 bg-green-500 text-white shadow-xl rounded">
            GO Home
          </button>
        </Link>
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;
