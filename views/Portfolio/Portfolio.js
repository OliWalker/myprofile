import Project from './Project';
import myProjectList from '../../myProjectList';

const Portfolio = () => (
  <div className="portfolio">
    {Object.values(myProjectList).map(project => (
      <Project project={project} />
    ))}

    <style jsx>
      {`
        .portfolio {
          width: 100vw;
          height: ${Object.keys(myProjectList).length * 94}vh;
        }
        h1 {
          padding-left: 3vw;
        }
      `}
    </style>
  </div>
);

export default Portfolio;
