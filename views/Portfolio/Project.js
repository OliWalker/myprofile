const Project = props => {
  return (
    <div className="project" style={props.project.backgroundColor}>
      <div className="project__content">
        <div />
        <span>{props.project.tagLine}</span>
      </div>
      <img className="project__carasel" src={props.project.imgUrl} />
      <div className="project__content__two">
        <div className="left">
          <span>Key features</span>
          <p>{props.project.keyFeatures1}</p>
          <p>{props.project.keyFeatures2}</p>
        </div>
        <div className="right">
          <span>Tech-Stack</span>
          {props.project.techStack.map(el => (
            <p>{el}</p>
          ))}
        </div>
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
            width: 40vw;
            display: flex;
            align-items: center;
          }
          .project__content div {
            width: 10vw;
            height: 10vw;
            background-image: url(${props.project.logoUrl});
            background-size: cover;
          }

          .project__content span {
            margin-left: 4vw;
            font-size: 2rem;
          }
          .project__carasel {
            width: 37vw;
            height: 55vh;
            background-size: cover;
          }
          .project__content__two {
            width: 40vw;
            display: flex;
            justify-content: space-between;
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
        `}
      </style>
    </div>
  );
};

export default Project;
