import { Spring } from 'react-spring'

const LandingPageContent = () => (
  <div className="LandingPageContent">
    <div>
      <Spring 
        from={{opacity:0, transform: 'translateX(-100px)'}}
        to={{opacity: 1, transform: 'translateX(0)'}}
        delay={1000}>
        {props =>
          <h1 style={props}>Hi!</h1>
        }
      </Spring>

      <Spring
        from={{opacity:0, transform: 'translateX(-100px)' }}
        to={{opacity: 1, transform: 'translateX(0)'}}
        delay={1500}>
        {props =>
          <h2 style={props}>I'm Oli.</h2>
        }
      </Spring>
    </div>
    <Spring
      from={{opacity:0, transform: 'translateX(-100px)' }}
      to={{opacity:1, transform: 'translateX(0)'}}
      delay={2000}>
      {props =>
        <p style={props}>
          I am a Full Stack developer <br />
          building all things JavaScript.
        </p>
      }
    </Spring>
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
