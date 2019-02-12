import React from 'react'
import helpers from '../../helpers/functions';
import { Spring, Trail } from 'react-spring';

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
  'Mocha / Chai / Jest Testing',
  'Apollo'
]);

class Skills extends React.PureComponent {
  render() {
    const { animate } = this.props
    if (!animate) return (
      <div style={{height:'94vh', width: '100vw', backgroundColor: 'rgba(30, 30, 30)'}}>
        <div style={{backgroundColor: 'rgba(9, 9, 9)', height: '94vh', width: '50vw', marginLeft: '25vw'}}/>
      </div>
    )
    return (
      <div className="skills">
        <div className="skills__contents">
          <div className="section">
            <Spring
              from={{transform:'translateY(-100px)'}}
              to={{transform:'translateY(0px)'}}
              delay={200}>
              {props =>
                <h2 style={props}>skilled in</h2>
              }
            </Spring>
            <div className="skillList">
              <Trail
                items={skillList} keys={item => item}
                from={{opacity: 0}}
                to={{opacity: 1}}
                delay={500}
              >
              {item => props => 
                  <span className="skill" style={animate ? props : {}}>{item}</span>}
              </Trail>
            </div>
          </div>

          <Spring
            from={{transform: 'translateY(800px)', opacity:0}}
            to={{transform:'translateY(0)', opacity:1}}
            delay={2200}
          >
            {props => (
            <div className="section2" style={props}>
              <h2>currently working for</h2>
              <div className="gitDetailList">
                <div className="gitter">
                  <a href="https://www.youtube.com/watch?v=AkOLBdTrWfg">
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
            </div>)}
          </Spring>

          <Spring
            from={{transform: 'translateY(500px)', opacity:0}}
            to={{transform:'translateY(0)', opacity:1}}
            delay={3000}
          >
            {props => (
              <div className="section3" style={props}>
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
            )}
          </Spring>
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
            overflow: hidden;
          }

          .skills__contents {
            background-color: rgba(9, 9, 9);
            text-align: center;
            height: 94vh;
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }

          .section {
            height: 31vh;
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
            font-size: 1.5rem;
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

          .Aktek {
            font-size: 2.5rem;
            transition: transform 0.2s ease-in-out;
            text-decoration: underline;
          }
          .Aktek:hover {
            transform: scale(1.1);
          }

          .section3 {
            height: 25vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 4vh;
          }

          i {
            font-size: 2.5rem;
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
              font-size: 1.3rem;
            }
          }
          @media (max-device-width: 480px) {
            h1 {
              font-size: 3rem;
            }
            h2 {
              font-size: 2.5rem;
            }
            i {
              font-size: 4rem;
            }
            span {
              font-size: 2rem
            }
            .skill {
              padding: 10px 14px;
              font-size: 1.8rem;
            }
            .Aktek {
              font-size: 4rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Skills;
