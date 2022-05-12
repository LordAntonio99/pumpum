import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

const Episode = ({ episodeId }) => {
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    const getEpisodeInfo = async () => {
      try {
        const res = await axios.get(
          "https://api1.pumpum.info/api/episodes/" + episodeId,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setEpisode(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getEpisodeInfo();
  }, []);
  console.log(episode);
  return (
    <div className="w-[96%] h-auto rounded-lg bg-zinc-900 overflow-hidden hover:scale-105 hover:bg-zinc-800 transition-all duration-150 flex flex-row">
      <img
        src={episode.imgSm}
        alt={episode.title}
        className="w-[20%] md:w-64 object-cover"
      />
      <div className="flex flex-col mx-4 my-4">
        <h1 className="text-white text-xl">
          {episode.episode + ". " + episode.title}
        </h1>
        <p className="text-white mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ea sequi ipsam asperiores, nihil dolor sapiente repellendus voluptatem
          blanditiis tenetur autem, quos nam dolorum optio corrupti cumque
          reiciendis accusantium voluptatibus!
        </p>
        <button className="bg-white/80 hover:bg-white/100 rounded-lg w-28 py-2 hover:scale-110 transition-all duration-150 font-bold flex items-center justify-center">
          <BsPlayFill className="w-6 h-6 mr-1"/> <span className="text-xl">Play</span>
        </button>
      </div>
    </div>
  );
};

export default Episode;
