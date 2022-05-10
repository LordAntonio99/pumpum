import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);
  if (!user) {
    return window.location.replace("/");
  }
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("https://api1.pumpum.info/api/movies/all", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-hidden">
      <Navbar activeMenu={true} menu="movies" />
      <div className="w-screen h-full bg-zinc-900">
        <h1 className="text-white font-semibold text-4xl py-4 px-8">Animes</h1>
        <div className="w-screen grid justify-center items-center grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mx-4 gap-4">
          {
            movies.map((movie) => (
                <Movie data={movie} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
