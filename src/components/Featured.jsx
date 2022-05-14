import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  const [featured, setFeatured] = useState({});
  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await axios.get(
          `https://api1.pumpum.info/api/${type}/random`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setFeatured(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFeatured();
  }, []);
  return (
    <div className="w-screen h-[100vh] bg-black relative">
      <video
        src={featured?.trailer}
        className="w-screen h-full object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute bottom-8 left-8 hover:bg-black/30 hover:scale-105 p-4 rounded-lg transition-all duration-150">
        <h1 className="text-4xl font-bold max-w-[40vw] text-white/90">
          {featured?.title}
        </h1>
        <h1 className="text-2xl max-w-[40vw] scrollbar-none max-h-0 overflow-x-scroll text-white/80 font-semibold mb-4 invisible md:visible md:max-h-52">
          {featured.desc}
        </h1>
        <div className="flex flex-col space-y-4 md:flex-row items-center justify-start md:space-y-0 md:space-x-4">
            <Link
              to={"/watch"}
              state={{ data: featured, type: "movie", info: featured }}
              className="bg-white/90 py-2 rounded-lg text-2xl font-bold w-64 flex flex-row items-center justify-center hover:scale-110 transition-all duration-100"
            >
              <BsPlayFill className="h-8 w-8 pr-2 pt-1" /> Play
            </Link>
            <Link
              to={{ pathname: "/movieInfo" }}
              state={{ movie: featured }}
              className="bg-white/90 py-2 rounded-lg text-2xl font-bold w-64 flex flex-row items-center justify-center hover:scale-110 transition-all duration-100"
            >
              <BsInfoCircle className="h-8 w-8 pr-2 pt-1" /> More info
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
