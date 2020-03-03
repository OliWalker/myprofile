import React, { useState, useEffect } from "react";
import LandingPage from "../views/LandingPage/LandingPage";

import { Meta } from "../components/Meta";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../views/Portfolio/Portfolio";
import Skills from "../views/Skills/Skills";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <main>
      <Meta />
      <LandingPage />
      <Navbar />
      {isMounted === true && (
        <>
          <Portfolio />
          <Skills />
        </>
      )}
      <style jsx>{``}</style>
    </main>
  );
};

export default HomePage;
