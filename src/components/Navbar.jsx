import React from "react";

const Navbar = ({ menu, activeMenu }) => {
  return (
    <div className="h-16 w-screen bg-black flex flex-row items-center justify-between px-12">
      <div className="flex flex-row justify-center items-center">
        <img
          src="https://api-doc.pumpum.info/slate/img/logo.png"
          alt="Pumpum logo"
          className="h-8 hover:scale-110 cursor-pointer transition duration-150"
        />
        {activeMenu && (
          <div className="flex flex-row text-white text-sm ml-11 space-x-4">
            <h1 className={menu === "home" ? "menu_text--active" : "menu_text"}>
              Home
            </h1>
            <h1 className="menu_text">Animes</h1>
            <h1 className="menu_text">Movies</h1>
          </div>
        )}
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="h-6 w-6" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
