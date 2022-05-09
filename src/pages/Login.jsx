import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../authContext/apiCalls";
import { AuthContext } from "../authContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    login({ email, password }, dispatch);
  };

  return (
    <div className="w-screen h-screen relative bg-black">
      <img
        src="https://c.tenor.com/5KDJWSgKWcUAAAAd/anime-wallpaper.gif"
        alt="Wallpaper"
        className="absolute w-screen h-screen object-cover opacity-70"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 bg-white/60 shadow-xl shadow-black/40 rounded-lg p-8">
        <div className="flex flex-col items-center justify-center">
          <img src="https://api-doc.pumpum.info/slate/img/logo.png" />
          <h1 className="text-xl mb-4">Sign in to your account</h1>
          <input
            type="text"
            placeholder="Email"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-red-600 text-white w-64 py-1 rounded-lg font-semibold hover:scale-110 transition-all duration-150 mb-2"
          >
            Sign in!
          </button>
          <h1 className="w-64 text-right text-sm">New here?</h1>
          <Link to="/register">
            <h1 className="w-64 text-right text-sm font-semibold text-red-600 hover:scale-110 transition-all duration-150">
              Create an account for free now!
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
