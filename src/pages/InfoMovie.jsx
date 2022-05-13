import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsPlayFill } from "react-icons/bs";
import Footer from "../components/Footer";

const InfoMovie = () => {
  const params = useLocation();
  const movie = params.state.movie;
  document.title = movie.title + " - Pumpum";
  return (
    <div className="max-w-screen overflow-hidden bg-zinc-900">
      <Navbar activeMenu={true} menu="movies" />
      <div className="w-screen bg-zinc-900 h-full relative mt-16">
        <video
          src={movie.trailer}
          className="w-screen h-[60vh] object-cover"
          autoPlay
          controls
        ></video>
        <h1 className="text-5xl font-semibold text-white/90 cursor-default absolute top-4 left-4 px-4 py-2 hover:scale-105 hover:bg-black/30 transition-all duration-150 rounded-lg">
          {movie?.title}
        </h1>
        <h1 className="text-3xl font-semibold text-white mt-8 ml-8">
          Description
        </h1>
        <h1 className="text-xl text-white mx-10 mt-4">{movie.desc}</h1>
      </div>
      <Link to={"/watch"} state={{ data: movie, type: "movie", info: movie }}>
        <button className="flex flex-row items-center justify-center text-2xl px-8 py-2 ml-10 my-8 bg-white/60 hover:bg-white hover:scale-110 transition-all duration-150 rounded-lg">
          <BsPlayFill className="h-5 w-5 mr-1" />
          <span className="font-semibold transition-all duration-100">
            Play
          </span>
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default InfoMovie;
