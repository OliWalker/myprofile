import LandingPage from '../views/LandingPage/LandingPage';
import React from 'react';
import NextHead from 'next/head';
import Portfolio from '../views/Portfolio/Portfolio';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="Index">
      <NextHead />
      <LandingPage />
      <Navbar />
      <Portfolio />
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
        `}
      </style>
    </div>
  );
};

export default Index;
