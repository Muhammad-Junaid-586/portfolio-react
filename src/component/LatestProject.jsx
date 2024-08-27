import React from "react";
import { ProjectSection, projects } from "./ProjectsData.jsx";

const LatestProjects = () => {
  return (
    <section className="w-[90%] mx-auto py-6 md:py-12 " id="portfolio">
      {/* Top heading */}
      <h2 className="text-4xl font-black text-center mb-2">
        Latest <span className="text-blue-500">Projects</span>
      </h2>
      {/* Horizontal line */}
      <div className="border-t-4 border-blue-500 w-24 mx-auto mb-8"></div>

      {/* Render project sections dynamically */}
      {Object.keys(projects).map((category) => (
        <ProjectSection
          key={category}
          category={category}
          projects={projects[category]}
        />
      ))}
    </section>
  );
};

export default LatestProjects;
