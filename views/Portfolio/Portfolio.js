import React from 'react';
import Project from './Project';
import myProjectList from '../../myProjectList';

class Portfolio extends React.PureComponent {
  render(){
    const { projectNumber } = this.props
    return (
      <div className="portfolio" tabIndex="0">
        {Object.values(myProjectList).map((project, i) => (
          <Project project={project} projectNumber={projectNumber} key={Object.keys(project)} i={i} />
        ))}
        <style jsx>
          {`
            .portfolio {
              width: 100vw;
              overflow-x: hidden;
              height: ${Object.keys(myProjectList).length * 94}vh;
            }
            h1 {
              padding-left: 3vw;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Portfolio;
