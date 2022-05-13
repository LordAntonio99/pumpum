import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";

const Navbar = ({ menu, activeMenu }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-16 w-screen bg-black flex flex-row items-center justify-between px-12 fixed z-50">
      <div className="flex flex-row justify-center items-center">
        <img
          src="https://api-doc.pumpum.info/slate/img/logo.png"
          alt="Pumpum logo"
          className="h-8 hover:scale-110 cursor-pointer transition duration-150"
        />
        {activeMenu && (
          <div className="flex flex-row text-white text-sm ml-11 space-x-4">
            <Link to="/">
              <h1
                className={menu === "home" ? "menu_text--active" : "menu_text"}
              >
                Home
              </h1>
            </Link>

            <Link to="/animes">
              <h1
                className={
                  menu === "animes" ? "menu_text--active" : "menu_text"
                }
              >
                Animes
              </h1>
            </Link>
            <Link to="/movies">
              <h1
                className={
                  menu === "movies" ? "menu_text--active" : "menu_text"
                }
              >
                Movies
              </h1>
            </Link>
          </div>
        )}
      </div>
      <div>
        <Link to="/settings">
          <button>
            <img
              src={user.profilePic ? user.profilePic : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
              className="h-8 w-8 rounded-lg object-cover cursor-pointer"
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
