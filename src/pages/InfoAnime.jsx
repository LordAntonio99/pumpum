import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Season from "../components/Season";

const InfoAnime = () => {
  const location = useLocation();
  const serie = location.state.serie;
  console.log(serie);
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
      <Navbar activeMenu menu="animes" />
      <div className="bg-zinc-900 w-full flex flex-col md:flex-row md:justify-center space-x-8 py-8 px-16">
        <img src={serie?.img} alt="" className="h-96 object-cover hover:scale-110 transition-all duration-150 rounded-lg" />
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-4xl ml-8">
            {serie?.title}
          </h1>
          {serie?.seasons?.map((season) => (
            <Season seasonId={season} serie={serie}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoAnime;
