import React from "react";
import Head from "next/head";
export const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title || "Oli Walker"}</title>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
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
        href=" https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
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
    </Head>
  );
};
