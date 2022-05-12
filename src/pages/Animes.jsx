import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Serie from "../components/Serie";

const Animes = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const getSeries = async () => {
      try {
        const res = await axios.get("https://api1.pumpum.info/api/series/all", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setSeries(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSeries();
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-hidden">
      <Navbar activeMenu={true} menu="animes" />
      <div className="w-screen h-full bg-zinc-900">
        <h1 className="text-white font-semibold text-4xl py-4 px-8">Animes</h1>
        <div className="w-screen grid justify-center items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-4 gap-4">
          {series ? (
            series.map((serie) => <Serie data={serie} key={serie._id} />)
          ) : (
            <div className="bg-zinc-900 h-screen w-screen"></div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Animes;
