import LandingPageContent from './LandingPageContent';
import LandingPageButtons from './LandingPageButtons';

const LandingPage = () => (
  <div className="landingPage">
    <LandingPageContent />
    <LandingPageButtons />
    <style jsx>
      {`
        .landingPage {
          width: 100vw;
          height: 100vh;
          background-image: url('https://res.cloudinary.com/dh9xnvxbz/image/upload/q_70/v1535205869/profile_photo.jpg');
          background-position: right bottom;
          background-size: cover;
          position: relative;
          z-index: 1;
        }

        .landingPage:after {
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

        @media (max-width: 900px) {
          .landingPage {
            background-position: left top;
          }
        }
      `}
    </style>
  </div>
);

export default LandingPage;
