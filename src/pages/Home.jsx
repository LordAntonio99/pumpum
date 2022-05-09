import React from "react";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section>
      <Navbar menu="home" activeMenu="true" />
      <Featured type="movies" />
    </section>
  );
};

export default Home;
