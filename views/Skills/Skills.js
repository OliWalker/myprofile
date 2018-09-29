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
        <h2>skilled in</h2>
        <div className="skillList">
          {skillList.map(el => (
            <span className="skill" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>

      <div className="section2">
        <h2>currently working for</h2>
        <div className="gitDetailList">
          <div className="gitter">
            <a href="https://aktek.io/">
              <h1 className="Aktek">www.Aktek.io</h1>
            </a>
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

      .section {
        height: 30vh;
      }
      .skills__contents {
        background-color: rgba(9, 9, 9);
        text-align: center;
        height: 94vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
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
      .section2 {
        height: 29vh;
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

      .Aktek {
        font-size: 2.5rem;
        transition: transform 0.2s ease-in-out;
        text-decoration: underline;
      }

      .Aktek:hover {
        transform: scale(1.1);
      }

      .section3 {
        max-height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 4vh;
      }

      i {
        font-size: 2.5rem;
        margin: 5px;
      }

      .icons {
        margin-bottom: 2vh;
      }

      @media (max-width: 1000px) {
        .skills__contents {
          width: 70vw;
        }
        .skillList {
          width: 70vw;
        }
      }
      @media (max-width: 800px) {
        .skills__contents {
          width: 80vw;
        }
        .skillList {
          width: 80vw;
        }
      }
    `}</style>
  </div>
);

export default Skills;
