import React from "react";
import LandingPage from "../views/LandingPage/LandingPage";
import Portfolio from "../views/Portfolio/Portfolio";
import Navbar from "../components/Navbar";
import Skills from "../views/Skills/Skills";
import Meta from "../components/Meta";
import myProjectList from "../myProjectList";
const skillsHeight = Object.keys(myProjectList).length;

class Index extends React.Component {
  state = {
    title: "Oli Walker",
    project: 0,
    skills: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.startAnimation);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.startAnimation);
  }

  startAnimation = () => {
    const { title, project } = this.state;
    if (
      window.scrollY >
      window.innerHeight * Object.keys(myProjectList).length
    ) {
      this.setState({ skills: true });
    }
    if (window.scrollY > window.innerHeight * (project + 0.5)) {
      this.setState({ project: (this.state.project += 1) });
    }
    if (window.scrollY < window.innerHeight && title !== "Oli Walker")
      this.setState({ title: "Oli Walker" });
    else if (
      window.scrollY > window.innerHeight &&
      window.scrollY < window.innerHeight * skillsHeight &&
      title !== "Portfolio"
    )
      this.setState({ title: "Portfolio" });
    else if (
      window.scrollY > window.innerHeight * skillsHeight &&
      title !== "Skills"
    )
      this.setState({ title: "Skills" });
  };

  render() {
    const { title, project, skills } = this.state;
    return (
      <div className="Index">
        <Meta title={title} />
        <LandingPage />
        <button
          className="downButton"
          onClick={() =>
            window.scrollTo({
              left: 0,
              top: window.innerHeight,
              behavior: "smooth"
            })
          }
        >
          <i className="fas fa-chevron-circle-down" />
        </button>
        <Navbar />
        <Portfolio projectNumber={project - 1} />
        <Skills animate={skills} />
        <style jsx global>
          {`
            @import url("https://fonts.googleapis.com/css?family=Montserrat");
            html {
              font-size: 16px;
            }
            body {
              margin: 0;
              overflow-x: hidden;
              min-width: 100vw;
            }

            body::-webkit-scrollbar {
              display: none;
            }
            * {
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

            .downButton {
              position: absolute;
              z-index: 5;
              font-size: 5rem;
              opacity: 0.5;
              border: none;
              background: none;
              animation: pulse 5s infinite;
              bottom: 3vh;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            @media (max-device-width: 480px) {
              .downButton {
                display: none;
              }
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
          `}
        </style>
      </div>
    );
  }
}

export default Index;
