import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 bg-gradient-to-b from-zinc-900 to-black h-24 flex flex-col items-center justify-center">
      <img
        src="https://api-doc.pumpum.info/slate/img/logo.png"
        alt="Pumpum logo"
        className="h-8 hover:scale-110 cursor-pointer transition duration-150"
      />
      <h1 className="text-white/70">COPYRIGHT 2022 PUMPUM. ALL RIGHTS RESERVED.</h1>
    </div>
  );
};

export default Footer;
