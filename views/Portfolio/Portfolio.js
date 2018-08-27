import Project from './Project';
import myProjectList from '../../myProjectList';

const Portfolio = () => (
  <div className="portfolio">
    <Project project={myProjectList.versus} />
    <Project project={myProjectList.freeYourStuff} />
    <Project project={myProjectList.deed} />

    <style jsx>
      {`
        .portfolio {
          width: 100vw;
          height: 1000vh;
        }
        h1 {
          padding-left: 3vw;
        }
      `}
    </style>
  </div>
);

export default Portfolio;
