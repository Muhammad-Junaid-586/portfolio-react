// HtmlProjectsPage.js
import React from "react";
import ProjectsPage from "./AllProjectsPage";
import { urraan, urraanjs } from "./AllProjectsData";

const HtmlProjectsPage = () => {
  return (
    <>
      <ProjectsPage category="urraan Html" projects={urraan} />;
      <ProjectsPage category="urraan js" projects={urraanjs} />;
    </>
  );
};

export default HtmlProjectsPage;
