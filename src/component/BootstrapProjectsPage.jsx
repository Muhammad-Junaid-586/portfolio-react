// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { bootstrapProjects } from "./AllProjectsData";

const BootstrapProjectsPage = () => {
  return <ProjectsPage category="bootstrap" projects={bootstrapProjects} />;
};

export default BootstrapProjectsPage;
