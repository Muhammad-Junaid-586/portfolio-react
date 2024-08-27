// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { jsProjects } from "./AllProjectsData";

const JavascriptProjectsPage = () => {
  return <ProjectsPage category="javascript" projects={jsProjects} />;
};

export default JavascriptProjectsPage;
