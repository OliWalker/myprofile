import LandingPage from '../views/LandingPage';
import React from 'react';
import NextHead from 'next/head';

const Index = () => {
  return (
    <div>
      <NextHead />
      <LandingPage />
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
          body {
            margin: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
