import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const Watch = () => {
  const location = useLocation();
  const data = location.state.data;
  const type = location.state.type;
  const serie = location.state.serie;
  const season = location.state.season;
  console.log(season);
  return (
    <div className="h-screen w-screen bg-black relative">
      {type === "serie" ? (
        <div className="absolute top-0 mt-4 mx-auto w-full h-[10%] flex flex-row justify-between px-8 items-center z-10">
          <Link to="/infoAnime" state={{ serie: serie }}>
            <BsArrowLeft className="text-white h-8 w-9 text-left" />
          </Link>
          <div className="flex flex-col justify-center items-center w-full">
            <span className="text-white text-2xl">{data.title}</span>
            <span className="text-white text-2xl">{serie.title} - S{season.number}:E{data.episode}</span>
          </div>
          <Link to="/" className="hover:scale-125 transition-all duration-150">
            <AiFillHome className="text-white h-8 w-9" />
          </Link>
        </div>
      ) : (
        <div className="absolute top-0 mt-4 mx-auto">
          <h1 className="text-white text-2xl">{data.title}</h1>
        </div>
      )}
      <video
        src={data.video}
        controls
        onVolumeChange={() => console.log("hola")}
        autoPlay
        className="w-full h-full"
      ></video>
    </div>
  );
};

export default Watch;
