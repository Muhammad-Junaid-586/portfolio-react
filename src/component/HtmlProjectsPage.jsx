// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { htmlCssProjects } from "./AllProjectsData";

const HtmlProjectsPage = () => {
  return <ProjectsPage category="HTML & Css" projects={htmlCssProjects} />;
};

export default HtmlProjectsPage;
