import axios from "axios";
import React, { useEffect, useState } from "react";
import Episode from "./Episode";

const Season = ({ seasonId, serie }) => {
  const [season, setSeason] = useState({});
  useEffect(() => {
    const getSeasonInfo = async () => {
      try {
        const res = await axios.get(
          "https://api1.pumpum.info/api/seasons/" + seasonId,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setSeason(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSeasonInfo();
  }, [seasonId]);
  console.log(season);
  return (
    <div className="w-full md:w-[60vw] md:ml-8 mt-8 bg-black rounded-lg">
      <div className="flex flex-row justify-between">
        <h1 className="text-white font-semibold text-2xl px-8 py-4">
          Season {season.number}
        </h1>
        <h1 className="text-white/60 font-semibold text-2xl px-8 py-4">
          {season?.episodes?.length} / {season.numberOfEpisodes}eps.
        </h1>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center pb-4">
      {season.episodes?.map((ep) => (
        <Episode episodeId={ep} serie={serie} season={season} />
      ))}
      </div>
    </div>
  );
};

export default Season;
