import React from "react";
import helpers from "../../helpers/functions";

const skillList = helpers.shuffle([
  "JS",
  "React",
  "Next",
  "Koa",
  "Redux",
  "Angular",
  "MongoDb",
  "MySQL",
  "Git",
  "GraphQL",
  "TypeScript",
  "Express",
  "Enzyme Testing",
  "Mocha / Chai / Jest Testing",
  "Apollo"
]);

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <section className="skills__contents">
        <div className="section">
          <h2>skilled in</h2>
          <div className="skillList">
            {skillList.map(skill => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="section2">
          <h2>currently working for</h2>
          <div className="gitDetailList">
            <div className="gitter">
              <h1 className="Aktek">Ginetta</h1>
            </div>
            <div className="gitter">
              <h2>as a</h2>
            </div>
            <div className="gitter">
              <h1>Front End Developer</h1>
            </div>
          </div>
        </div>

        <div className="section3">
          <h1> get in touch</h1>
          <div className="icons">
            <a href="https://linkedin.com/in/oli-walker/">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/oliwalker">
              <i className="fab fa-github-square" />
            </a>
          </div>
          <a href="mailto:oliwalker@protonmail.com">
            <span>Say: Hi@OliWalker.me</span>
          </a>
        </div>
      </section>
      <style jsx>{`
        .skills {
          width: 100vw;
          background-color: rgba(30, 30, 30);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .skills__contents {
          background-color: rgba(9, 9, 9);
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          max-width: 50vw;
        }

        .skillList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background-color: rgba(9, 9, 9);
        }

        .skill {
          padding: 10px 15px;
          margin: 4px;
          color: black;
          background-color: rgba(255, 255, 255, 1.5);
          font-size: 16ox;
          display: inline;
          border-radius: 10px;
          transition: transform 0.2s ease-in-out;
        }
        .skill:hover {
          transform: scale(1.1);
        }

        .section2 {
          height: 38vh;
        }

        .section2,
        .section3 {
          margin-top: 8vh;
        }

        .gitDetailList {
          background-color: rgba(9, 9, 9);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .gitter__link {
          display: block;
        }

        .Aktek {
          font-size: 32px;
          transition: transform 0.2s ease-in-out;
          text-decoration: underline;
        }
        .Aktek:hover {
          transform: scale(1.1);
        }

        .section3 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 4vh;
        }

        i {
          font-size: 32px;
          margin: 5px;
        }

        .icons {
          margin-bottom: 2vh;
        }

        .icons a {
          font-size: 40px;
        }

        @media (max-width: 1300px) {
          .skills__contents {
            width: 65vw;
          }
          .skill {
            padding: 8px 12px;
            font-size: 14px;
          }
        }
        @media (max-device-width: 480px) {
          h1 {
            font-size: 30px;
          }
          h2 {
            font-size: 24px;
          }
          i {
            font-size: 36px;
          }
          span {
            font-size: 22px;
          }
          .skill {
            padding: 10px 14px;
            font-size: 16px;
          }
          .Aktek {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
