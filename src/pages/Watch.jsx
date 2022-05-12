import React from "react";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return (
    <div className="h-screen w-screen bg-black relative">
        <div className="absolute top-0 mt-4 mx-auto">
            <h1 className="text-white text-2xl">{data.title}</h1>
        </div>
      <video
        src={data.video}
        controls
        autoPlay
        className="w-full h-full"
      ></video>
    </div>
  );
};

export default Watch;
