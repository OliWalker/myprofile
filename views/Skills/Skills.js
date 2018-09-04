import helpers from '../../helpers/functions';
import Link from 'next/link';

const skillList = helpers.shuffle([
  'JS',
  'React',
  'Next',
  'Koa',
  'Redux',
  'Angular',
  'MongoDb',
  'MySQL',
  'Git',
  'GraphQL',
  'TypeScript',
  'Express',
  'Enzyme Testing',
  'Mocha Testing',
  'Chai Testing',
  'Jest Testing',
  'Apollo'
]);

const Skills = () => (
  <div className="skills">
    <div className="skills__contents">
      <div className="section">
        <h1>skilled in</h1>
        <div className="skillList">
          {skillList.map(el => (
            <span className="skill">{el}</span>
          ))}
        </div>
      </div>

      <div className="section2">
        <h1>git status Sep.</h1>
        <div className="gitDetailList">
          <div className="gitter">
            <h2>Repos</h2>
            <h1>5</h1>
          </div>
          <div className="gitter">
            <h2>Pull Requests</h2>
            <h1>3</h1>
          </div>
          <div className="gitter">
            <h2>Commits</h2>
            <h1>8</h1>
          </div>
          <div className="gitter">
            <h2>Insertions</h2>
            <h1>1,387</h1>
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
    </div>
    <style jsx>{`
      .skills {
        width: 100vw;
        height: 94vh;
        background-color: rgba(30, 30, 30);
        z-index: 200;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .skills__contents {
        background-color: rgba(9, 9, 9);
        text-align: center;
        height: 94vh;
      }

      .skillList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 50vw;
        background-color: rgba(9, 9, 9);
      }
      .skill {
        padding: 10px 15px;
        margin: 4px;
        color: black;
        background-color: rgba(255, 255, 255, 1.5);
        font-size: 1.5rem;
        display: inline;
        border-radius: 10px;
      }

      .section2,
      .section3 {
        margin-top: 8vh;
      }

      .gitDetailList {
        background-color: rgba(9, 9, 9);
        display: flex;
        justify-content: space-evenly;
      }

      .section3 {
        max-height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      i {
        font-size: 2.5rem;
        margin: 5px;
      }
      @media (max-width: 1000px) {
        .skillList {
          width: 60vw;
        }
      }
      @media (max-width: 800px) {
        .skillList {
          width: 80vw;
        }
      }
    `}</style>
  </div>
);

export default Skills;
