import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full  py-3 flex items-center justify-between bg-white z-10 transition-shadow duration-300">
      {/* Logo - Updated to Link component */}
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          NE<span className=" text-blue-600">LCA</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl text-gray-800 cursor-pointer"
          onClick={handleToggle}
        >
          <FaAlignJustify />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-lg text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a
            href="#about"
            className="text-lg text-gray-800 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-lg text-gray-800 hover:text-blue-500"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="text-lg text-gray-800 hover:text-blue-500"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 hover:text-blue-500"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        {toggle && (
          <div className="fixed inset-0 bg-white shadow-lg z-20 flex flex-col p-4 space-y-4 md:hidden">
            <a
              href="#home"
              className="text-lg text-gray-800 hover:text-blue-500"
              onClick={handleToggle}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg text-gray-800 hover:text-blue-500"
              onClick={handleToggle}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-lg text-gray-800 hover:text-blue-500"
              onClick={handleToggle}
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-lg text-gray-800 hover:text-blue-500"
              onClick={handleToggle}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-lg text-gray-800 hover:text-blue-500"
              onClick={handleToggle}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
