import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const InfoMovie = () => {
  const params = useLocation();
  const movie = params.state.movie
  console.log(movie);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar activeMenu={true} menu="movies" />
      <div className="w-full bg-zinc-900 h-full relative">
        <video src={movie.trailer} className="w-full h-[60vh] object-cover" autoPlay controls></video>
        <h1 className="text-5xl font-semibold text-white/90 absolute top-4 left-4 px-4 py-2 hover:scale-105 hover:bg-black/30 transition-all duration-150 rounded-lg">{movie.title}</h1>
        <h1 className="text-3xl font-semibold text-white mt-8 ml-8">Description</h1>
        <h1 className="text-xl text-white mx-10 mt-4">{movie.desc}</h1>
      </div>
    </div>
  );
};

export default InfoMovie;
