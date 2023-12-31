import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../MangeAuth/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const info = { email, password };
    console.log(info);
    login(email, password).then((res) => console.log(res.user));
    navigate(location?.state ? location.state : "/").catch((error) =>
      console.log(error.message)
    );
  };

  return (
    <div className="w-full p-4 h-screen">
      <div className=" mt-36 md:w-6/12 p-3 h-[500px] rounded flex items-center justify-center mx-auto bg-gradient-to-r  from-pink-700 to-sky-950">
        <form
          onSubmit={handleLogin}
          className="w-96 rounded-lg p-10 backdrop-blur bg-white/10 font-philospar"
        >
          <h1 className="text-center text-xl uppercase text-white">
            login Here
          </h1>
          <label className="text-white " htmlFor="">
            Email
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="email"
              name="email"
              id=""
            />
          </label>
          <label className="text-white mt-5" htmlFor="">
            Password
            <input
              className="block rounded border-gray-500 outline-none bg-transparent px-3 py-2 border w-full mt-1"
              type="password"
              name="password"
              id=""
            />
          </label>
          <button
            type="submit"
            className="w-full text-white rounded bg-gradient-to-r  to-pink-700 from-sky-950 mt-4 py-1"
          >
            Login
          </button>

          <p className="mt-3 text-center text-gray-400" href="">
            You Have No Account -{" "}
            <Link className="text-sky-500" to="/register">
              Register
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
