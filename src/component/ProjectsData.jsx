import React from "react";
import { FaLink } from "react-icons/fa"; // Importing an icon from react-icons
import { Link } from "react-router-dom"; // Import Link for navigation

import facebook from "../assets/facebook1.jpeg";
import home from "../assets/home2.jpg";
import electronic from "../assets/electronic.jpeg";
import pacman from "../assets/pacman.jpg";
import mathForKids from "../assets/mathforkid.jpg";
import calculator from "../assets/calculator.jpeg";
import portfolio from "../assets/portfolio.jpeg";
import foodies from "../assets/foodies.jpg";
import wheather from "../assets/wheather.jpg";
import password from "../assets/randomcolor.jpeg";
import youtube from "../assets/youtube.jpg";
import instagram from "../assets/instagram.jpg";
import onlineStore from "../assets/onlineStore.jpg";
import task1 from "../assets/task1.jpg";
import task2 from "../assets/task2.jpg";
// Project data categorized by type
export const projects = {
  html: [
    {
      id: 1,
      name: "Facebook Clone",
      image: facebook,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/facebook%20project/facebook.html",
    },
    {
      id: 2,
      name: "Home Landing Page",
      image: home,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/Projects/2ndproject.html",
    },
    {
      id: 3,
      name: "Electronic Store",
      image: electronic,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/html&css/ecommerce%20in%20css/code%20for%20eccomerace%20website/index.html",
    },
  ],

  bootstrap: [
    {
      id: 1,
      name: "Portfolio Website",
      image: portfolio,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/Portfolio%20website/index.html",
    },
    {
      id: 2,
      name: "Landing Page Website",
      image: home,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/second%20project/index.html",
    },
    {
      id: 3,
      name: "Foodies Website",
      image: foodies,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Bootstrap%20Projects/Foodies%20website/index.html",
    },
  ],
  javascript: [
    {
      id: 1,
      name: "Portfolio Website",
      image: pacman,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/pacman%20game/index.html",
    },
    {
      id: 2,
      name: "Product Page",
      image: mathForKids,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/math%20for%20kids/index.html",
    },
    {
      id: 3,
      name: "Calculator",
      image: calculator,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/javascript/calculator/index.html",
    },
  ],

  reactjs: [
    {
      id: 1,
      name: "Youtube Clone",
      image: youtube,
      // link: "https://youtube-clone-t.netlify.app/",
    },
    {
      id: 2,
      name: "Instagram Clone",
      image: instagram,
      // link: "https://insta-clone-on-react-tailwind.netlify.app/",
    },
    {
      id: 3,
      name: "Online Store",
      image: onlineStore,
      // link: "https://react-online-store-tailwind.netlify.app/",
    },
  ],

  urraan: [
    {
      id: 1,
      name: "CatchUp",
      image: task1,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task1/index.html",
    },
    {
      id: 2,
      name: "Red Cards Form",
      image: task2,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task2/index.html",
    },
    {
      id: 3,
      name: "Keefers Layout",
      image: task1,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/task4%20responsive/index.html",
    },
  ],

  urraanjs: [
    {
      id: 1,
      name: "Red Card Form Validation",
      image: task1,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/form%20validation%20in%20javascript/project/index.html",
    },
    {
      id: 2,
      name: "Random Bubbles Generator",
      image: task2,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/random%20bubble/index.html",
    },
    {
      id: 3,
      name: "Image Slider",
      image: task1,
      // link: "https://muhammad-junaid-586.github.io/my-portfolio/all%20projects%20pages/Urraan%20Task/js%20tasks/slider-project%20completed/index2.html",
    },
  ],
  // Add more categories if needed
};

// ProjectSection component for rendering each category of projects
export const ProjectSection = ({ category, projects, showSeeAll = true }) => {
  // Determine the display text for the category heading
  const displayCategory =
    category.toLowerCase() === "html"
      ? "HTML & CSS"
      : category.toLowerCase() === "urraanjs"
      ? "URRAAN JS"
      : category.toUpperCase();

  return (
    <>
      {/* Full-width horizontal line */}
      <div className="w-full mb-4">
        <hr className="h-[10px] bg-blue-500 border-none rounded-full" />
      </div>
      {/* Sub-heading */}
      <h3 className="text-4xl font-bold text-center text-gray-700 my-6">
        {displayCategory} <span className="text-blue-500">PROJECTS</span>
      </h3>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-[15px] shadow-lg"
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {/* Icon and project name */}
              <div className="text-white text-center flex flex-col justify-center items-center cursor-pointer">
                <a href={project.link} target="_blank">
                  <FaLink className="text-3xl mb-2" />
                </a>
                <h4 className="text-xl font-semibold">{project.name}</h4>
              </div>
            </div>
            {/* Link for React projects */}
            {category === "react" && (
              <Link
                to={`/projects/${project.id}`} // Adjust this path based on your routing setup
                className="absolute inset-0"
              />
            )}
          </div>
        ))}
      </div>
      {/* See All Projects Button */}
      {showSeeAll && (
        <div className="text-center  my-12">
          <Link
            to={`/projects/${category}`}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            See All {displayCategory} Projects
          </Link>
        </div>
      )}
    </>
  );
};

export default { ProjectSection, projects };
