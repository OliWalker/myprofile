import MyCarousel from "../../components/Carousel";
import React from "react";

export const Project = ({ project }) => {
  return (
    <div className="project" style={project.backgroundColor}>
      <div className="project__content">
        <div style={{ ...project.logoStyle }} />
        <span>{project.tagLine}</span>
      </div>
      <div className="carousel">
        <div>
          <MyCarousel pics={project.picLinks} demo={project.demo} />
        </div>
      </div>
      <div className="project__content__two">
        <div className="left">
          <span>Key features</span>
          <p>{project.keyFeatures1}</p>
          <p>{project.keyFeatures2}</p>
        </div>
        <div className="right">
          <span>Tech-Stack</span>
          {project.techStack.map(el => (
            <p key={el}>{el}</p>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .project {
            display: flex;
            overflow-x: hidden;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            color: white;
            height: 94vh;
          }
          .project__content {
            min-width: 40vw;
            display: flex;
            align-items: center;
          }
          .project__content div {
            width: 10vw;
            height: 10vw;
            background-image: url(${project.logoUrl});
            background-size: contain;
            background-repeat: no-repeat;
          }
          .project__content span {
            margin-left: 4vw;
            font-size: 2rem;
          }
          .carousel {
            display: inline;
            background-color: ${project.innerColor};
            width: 55vw;
            height: 45vh;
          }

          .project__content__two {
            width: 40vw;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2vh;
          }
          .project__content__two span {
            font-weight: bold;
            font-size: 1.5rem;
          }
          .left {
            width: 60%;
          }
          .right p {
            line-height: 0.5rem;
          }
          li {
            list-style: none;
          }
          @media (max-width: 1000px) {
            .project__content {
              width: 70vw;
            }
            .carousel {
              width: 90vw;
            }
            .project__content__two {
              width: 70vw;
            }
          }
          @media (max-device-width: 480px) {
            .project__content {
              width: 70%;
            }
            .project__content span {
              font-size: 3rem;
              text-align: center;
            }
            .project__content__two {
              width: 80vw;
            }
            .project__content__two span {
              font-weight: bold;
              font-size: 2.4rem;
            }
            .project__content__two p {
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};
