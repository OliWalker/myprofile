const LandingPageContent = () => (
  <div className="LandingPageContent">
    <h1>Hi!</h1>
    <h2>I'm Oli.</h2>
    <p>
      I am a Full Stack developer <br />
      building all things JavaScript.
    </p>
    <style jsx>
      {`
        .LandingPageContent {
          color: white;
          padding-top: 4vh;
          padding-left: 10vw;
          position: absolute;
          z-index: 2;
        }

        h1 {
          font-size: 5rem;
        }
        h2 {
          font-size: 4rem;
        }
        p {
          font-size: 2rem;
        }
      `}
    </style>
  </div>
);

export default LandingPageContent;
