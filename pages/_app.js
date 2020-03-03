import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />

        <style jsx global>
          {`
            @import url("https://fonts.googleapis.com/css?family=Montserrat");
            html {
              scroll-behavior: smooth;
            }
            body {
              margin: 0;
              overflow-x: hidden;
            }
            body::-webkit-scrollbar {
              display: none;
            }
            * > * {
              box-sizing: border-box;
              font-family: Montserrat, sans-serif;
            }
            *:focus {
              outline: none;
              box-shadow: 0px 0px 9px 6px rgba(155, 159, 199, 1);
            }
            a {
              text-decoration: none;
              color: white;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
