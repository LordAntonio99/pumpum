import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const InfoAnime = () => {
  const location = useLocation();
  const serie = location.state
  return (
    <div>
      <Navbar activeMenu menu="animes" />
      <div className="bg-zinc-900 w-full h-[60vh] flex flex-col md:flex-row py-8 px-16">
        <img src={serie.img} alt="" className="h-96" />
        <div>
            <h1 className="text-white font-semibold text-4xl ml-8">{serie.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoAnime;
