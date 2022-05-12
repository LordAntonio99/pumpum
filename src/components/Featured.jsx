import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayFill, BsInfoCircle } from "react-icons/bs"

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
    console.log(featured);
  }, []);
  return (
    <div className="w-screen h-[90vh] bg-black relative">
      <video
        src={featured.trailer}
        className="w-screen h-full object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute bottom-8 left-8 hover:bg-black/30 hover:scale-105 p-4 rounded-lg transition-all duration-150">
        <h1 className="text-4xl font-bold max-w-[40vw] text-white/90">
          {featured.title}
        </h1>
        <h1 className="text-2xl max-w-[40vw] text-white/80 font-semibold mb-4">{featured.desc}</h1>
        <div className="flex flex-row items-center justify-start space-x-4">
          <button className="bg-white/90 py-2 rounded-lg text-2xl font-bold w-64 flex flex-row items-center justify-center hover:scale-110 transition-all duration-100">
            <BsPlayFill className="h-8 w-8 pt-1"/> Play
          </button>
          <button className="bg-black/30 text-white py-2 rounded-lg text-2xl font-bold w-64 flex flex-row items-center justify-center hover:scale-110 transition-all duration-100">
            <BsInfoCircle className="h-8 w-8 pr-2 pt-1"/> More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
