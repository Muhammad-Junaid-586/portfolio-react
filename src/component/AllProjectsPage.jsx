import React, { useState } from "react";
import { ProjectSection } from "./ProjectsData"; // Adjust the import path based on your file structure

const AllProjectsPage = ({ category, projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="p-6 md:p-12 w-full bg-gray-100 my-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">
        {/* {category} <span className="text-blue-500">Projects</span> */}
      </h2>
      {/* Project Section */}
      <ProjectSection
        category={category}
        projects={currentProjects}
        showSeeAll={false}
      />

      {/* Pagination */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 rounded-full bg-blue-500 text-white disabled:bg-gray-300"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 rounded-full bg-blue-500 text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllProjectsPage;
