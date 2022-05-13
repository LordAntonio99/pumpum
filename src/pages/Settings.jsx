import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../authContext/AuthActions";
import { AuthContext } from "../authContext/AuthContext";
import Navbar from "../components/Navbar";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.replace("/")
  };
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <Navbar activeMenu />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {user.isAdmin && (
          <a href="https://admin.pumpum.info/">
            <div className="text-white text-2xl bg-red-900 px-2 py-1 rounded-lg">
              Panel de administrador
            </div>
          </a>
        )}
        <h1 className="text-white text-2xl">User: {user.username}</h1>
        <h1 className="text-white text-2xl">Email: {user.email}</h1>
        <img
          src={user.profilePic}
          alt="Profile picture"
          className="w-44 h-44 object-cover rounded-lg"
        />
        <button
          className="bg-red-900 px-4 py-1 rounded-lg text-white text-xl"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
