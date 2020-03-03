import React from "react";
import { Project } from "./Project";
import myProjectList from "../../myProjectList";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      {Object.keys(myProjectList).map(project => (
        <Project project={myProjectList[project]} key={project.name} />
      ))}
      <style jsx>{``}</style>
    </section>
  );
};
