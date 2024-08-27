// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { reactProjects } from "./AllProjectsData";

const ReactProjectsPage = () => {
  return <ProjectsPage category="React" projects={reactProjects} />;
};

export default ReactProjectsPage;
