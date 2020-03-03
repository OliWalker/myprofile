const LandingPage = () => (
  <section id="home">
    <div className="content">
      <h1>Hi!</h1>
      <h2>I'm Oli.</h2>
      <p>
        I am a Full Stack developer <br />
        building all things JavaScript.
      </p>

      <button onClick={() => window.open("/static/cv.pdf", "_blank")}>
        Curriculum
      </button>
    </div>

    <a href="#portfolio" className="downButton">
      <i className="fas fa-chevron-circle-down" />
    </a>
    <style jsx>
      {`
        section {
          width: 100vw;
          height: 100vh;
          background-image: url('https://res.cloudinary.com/dh9xnvxbz/image/upload/q_70/v1535205869/profile_photo.jpg');
          background-position: right bottom;
          background-size: cover;
          position: relative;
          display: flex;
          justify-content: center;
        }

        section:after {
          content: '';
          width: 100vw;
          height: 100vh;
          background: black;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.4;
        }

        .content {
          color: white;
          padding-top: 6vh;
          padding-left: 24px;
          z-index: 20;
          position: relative;
          width: 800px;
        }

        .content h1 {
          font-size: 64px;
        }
        .content h2 {
          font-size: 48px;
        }
        .content p {
          font-size: 36px;
        }

        button {
          color: white;
          background: none;
        }

        .content button {
          border: 2px solid white;
          border-radius: 8px;
          padding: 5px 15px;
          font-size: 24px;
          transition: all 0.2s ease-in;
          font-weight: bold;
          margin-top: 64px;
        }

        .content button:hover {
          background: white;
          color: #666;
        }

        .downButton {
            position: absolute;
            z-index: 50;
            left: 50vw;
            font-size: 72px;
            opacity: 0.5;
            border: none;
            animation: pulse 5s infinite;
            bottom: 50px;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1) translateY(0px);
            }
            75% {
              transform: translateY(10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        }

        @media (max-width: 900px) {
          .landingPage {
            background-position: left top;
          }
        }
      `}
    </style>
  </section>
);

export default LandingPage;
