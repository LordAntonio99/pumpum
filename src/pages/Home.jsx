import React from "react";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";

const Home = () => {
  document.title = "Pumpum";
  return (
    <>
      <section>
        <Navbar menu="home" activeMenu="true" />
        <Featured type="movies" />
      </section>
    </>
  );
};

export default Home;
