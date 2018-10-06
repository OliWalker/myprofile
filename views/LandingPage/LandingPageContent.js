const LandingPageContent = () => (
  <div className="LandingPageContent">
    <div>
      <h1>Hi!</h1>
      <h2>I'm Oli.</h2>
    </div>
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
        @media (min-width: 1500px) {
          .LandingPageContent {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 60vw;
          }
          .LandingPageContent p {
            padding-top: 11vh;
          }
        }
      `}
    </style>
  </div>
);

export default LandingPageContent;
