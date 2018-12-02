import MyCarousel from '../../components/Carousel';
import React from 'react'
import { Spring } from 'react-spring';

class Project extends React.PureComponent {

  render() {
    const { project, projectNumber, i} = this.props
    const animate = projectNumber >= i
    if (!animate) return <div className="project" style={{height: '91vh', width: '100vw',...project.backgroundColor}} />
    return (
      <div className="project" style={project.backgroundColor}>
        <div className="project__content">
        <Spring 
          key={project.logoStyle}
          from={{transform: 'translateX(-500px)', opacity: 0}}
          to={{transform: 'translateX(0px)', opacity: 1}}
          delay={200}
        >
            {props => {
              const animateStyle = animate ? props : {}
            return (
          <div style={{...project.logoStyle, ...animateStyle}} onClick={()=>this.setState({animate: true})}/>
            )}}
        </Spring>
        <Spring 
          key={project.tagLine}
          from={{transform: 'translateX(500px)', opacity: 0}}
          to={{transform: 'translateX(0px)', opacity: 1}}
          delay={200}
        >
          {props => 
          <span style={animate ? props : {}}>{project.tagLine}</span>
            }
          </Spring>
        </div>
        <div className="carousel">
        <Spring 
        key={project.picLinks[0]}
          from={{opacity: 0}}
          to={{opacity: 1}}
          delay={500}>
          {props => (
            <div style={animate ? props : {}}>
              <MyCarousel pics={project.picLinks} demo={project.demo} />
            </div>
          )
          }
        </Spring>
        </div>
        <div className="project__content__two">
        <Spring 
          key={project.keyFeatures1}
          from={{transform: 'translateX(-500px)', opacity: 0}}
          to={{transform: 'translateX(0px)', opacity: 1}}
          delay={800}
        > 
        {props => (
          <div className="left" style={animate ? props : {}}>
            <span>Key features</span>
            <p>{project.keyFeatures1}</p>
            <p>{project.keyFeatures2}</p>
          </div>
        )}
        </Spring>
        <Spring
        key={project.techStack[0]}
          from={{transform: 'translateX(500px)', opacity:0}}
          to={{transform: 'translateX(0)', opacity: 1}}
          delay={800}>
          {props => (
          <div className="right" style={animate ? props : {}}>
            <span>Tech-Stack</span>
            {project.techStack.map(el => (
              <p key={el}>{el}</p>
            ))}
          </div>
          )}
        </Spring>
        </div>
        <style jsx>
          {`
            .project {
              display: flex;
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
                text-align: center
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
  }
};

export default Project;
