import LandingPage from '../views/LandingPage/LandingPage';
import React from 'react';
import NextHead from 'next/head';
import Portfolio from '../views/Portfolio/Portfolio';
import Navbar from '../components/Navbar';
import Skills from '../views/Skills/Skills';

const Index = () => {
  return (
    <div className="Index">
      <NextHead>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </NextHead>
      <LandingPage />
      <Navbar />
      <Portfolio />
      <Skills />
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
          body {
            margin: 0;
          }
          body::-webkit-scrollbar {
            display: none;
          }
          * {
            box-sizing: border-box;
            font-family: Montserrat, sans-serif;
          }
          *:focus {
            outline: none;
          }
          a {
            text-decoration: none;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
