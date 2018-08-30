import LandingPageContent from './LandingPageContent';

const LandingPage = () => (
  <div className="landingPage">
    <LandingPageContent />
    <style jsx>
      {`
        .landingPage {
          width: 100vw;
          height: 100vh;
          background-image: url('http://res.cloudinary.com/dh9xnvxbz/image/upload/v1535205869/profile_photo.jpg');
          background-position: left top;
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
          opacity: 0.25;
        }
      `}
    </style>
  </div>
);

export default LandingPage;
