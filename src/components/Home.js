import React from "react";
import Information from "./Information";
import About from "./About";
import Banner from "./Banner";
import Perfil from "./Perfil";
import Work from "./Work";
import Contact from "./Contact";
import Ventasf from "./Ventasf";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Perfil />
      <Ventasf />
      <Information />
      <Work />

      <Contact />
    </>
  );
};

export default Home;
