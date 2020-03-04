import { Spring } from "react-spring";

const LandingPageButtons = () => (
  <Spring
    from={{ opacity: 0, transform: "translateX(-100px)" }}
    to={{ opacity: 1, transform: "translateX(0)" }}
    delay={2500}
  >
    {props => (
      <div className="landingPageButtons" style={props}>
        <button
          onClick={() => window.open("/static/Oliver_Walker_Cv.pdf", "_blank")}
        >
          Curriculum
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.timeshighereducation.com/student/blogs/keeping-coding",
              "_blank"
            )
          }
        >
          My Story
        </button>
        <style jsx>
          {`
            .landingPageButtons {
              z-index: 2;
              position: absolute;
              padding-top: 80vh;
              padding-left: 10vw;
            }
            button {
              background: none;
              color: white;
              border: 2px solid white;
              border-radius: 8px;
              padding: 5px 15px;
              font-size: 2.2rem;
              font-weight: bold;
              transition: all 0.2s ease-in;
              margin: 5px;
            }
            button:hover {
              background: white;
              color: grey;
            }
            @media (max-device-width: 480px) {
              .landingPageButtons {
                padding-top: 90vh;
                padding-left: 5vw;
              }
              button {
                font-size: 3.5rem;
              }
            }
          `}
        </style>
      </div>
    )}
  </Spring>
);

export default LandingPageButtons;
