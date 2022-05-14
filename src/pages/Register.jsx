import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ValidateEmail from "../tools/ValidateEmail";
import ValidateUsername from "../tools/ValidateUsername";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleCreate = async () => {
    if (!ValidateUsername(username)) {
      alert("Invalid username!");
      return;
    }
    if (!ValidateEmail(email)) {
      alert("Invalid email address!");
      return;
    }
    if (password1 !== password2) {
      alert("Passwords must be the same");
      return;
    }

    try {
      const profilePic = `https://api.multiavatar.com/${username}.png`
      await axios.post("https://api1.pumpum.info/api/auth/register", {
        email,
        password: password1,
        username,
        profilePic
      });
      alert("Registrado")
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen relative bg-black">
      <img
        src="https://i.pinimg.com/originals/8e/14/55/8e145599d4847e339828787162952035.gif"
        alt="Wallpaper"
        className="absolute w-screen h-screen object-cover opacity-70"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 bg-white/60 shadow-xl shadow-black/40 rounded-lg p-8">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://api-doc.pumpum.info/slate/img/logo.png"
            alt="Pumpum logo"
            className="animate-bounce"
          />
          <h1 className="text-xl mb-4">Create a new account</h1>
          <input
            type="text"
            placeholder="Username"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setPassword1(e.target.value)}
          />
          <input
            type="password"
            placeholder="Comfirm password"
            className="px-2 py-1 rounded-lg w-64 focus:outline-none mb-2"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button
            onClick={handleCreate}
            className="bg-red-600 text-white w-64 py-1 rounded-lg font-semibold hover:scale-110 transition-all duration-150 mb-2"
          >
            Sign up!
          </button>
          <h1 className="w-64 text-right text-sm">New here?</h1>
          <Link to="/">
            <h1 className="w-64 text-right text-sm font-semibold text-red-600 hover:scale-110 transition-all duration-150">
              Create an account for free now!
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
