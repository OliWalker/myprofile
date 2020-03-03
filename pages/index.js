import React from "react";
import LandingPage from "../views/LandingPage/LandingPage";

import { Meta } from "../components/Meta";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../views/Portfolio/Portfolio";
import Skills from "../views/Skills/Skills";

const HomePage = () => {
  return (
    <main>
      <Meta />
      <LandingPage />
      <Navbar />
      <Portfolio />
      <Skills />

      <style jsx>{``}</style>
    </main>
  );
};

export default HomePage;
