import React from "react";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Movie = ({ data }) => {
  return (
    <div className="w-64 h-96 relative bg-gray-500 opacity-80 hover:opacity-100 hover:z-10 rounded-lg group hover:scale-110 transition-all duration-150 overflow-hidden">
      <img src={data.img} className="w-full h-full object-cover" alt="" />
      <div className="absolute bottom-2 inset-x-0 w-full flex flex-row items-center justify-around">
        <Link to={"/watch"} state={{ data: data, type: "movie", info: data }}>
          <button className="flex w-24 flex-row invisible group-hover:visible hover:scale-110 justify-center items-center group-hover:bg-white/80 px-2 py-1 rounded-lg transition-all duration-150">
            <BsPlayFill className="h-5 w-5 mr-1" />
            <span className="font-semibold invisible group-hover:visible transition-all duration-100">
              Play
            </span>
          </button>
        </Link>
        <Link to={{ pathname: "/movieInfo" }} state={{ movie: data }}>
          <button className="flex w-24 flex-row invisible group-hover:visible hover:scale-110 justify-center items-center group-hover:bg-white/80 px-2 py-1 rounded-lg transition-all duration-150">
            <BsInfoCircle className="h-5 w-5 mr-1" />
            <span className="font-semibold invisible group-hover:visible transition-all duration-100">
              Info
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
