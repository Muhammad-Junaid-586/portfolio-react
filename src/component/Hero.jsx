import React from "react";
import TypingEffect from "react-typing-effect";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import junaid from "../assets/junaid2.jpg";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-center w-[90%] mx-auto py-24 "
      id="home"
    >
      <div className="text-left md:w-1/2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-600">
          Hello, It's Me
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-4">
          Muhammad Junaid
        </h1>
        <h3 className="text-lg md:text-[25px] font-medium text-gray-700">
          I'm a{" "}
          <TypingEffect
            className="text-blue-500 font-bold"
            text={[
              "WordPress Developer",
              "Frontend Developer",
              "UI/UX Designer",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
        </h3>

        <div className="flex justify-start my-6 space-x-4  ">
          <a
            className="
"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl md:text-3xl text-gray-700 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl md:text-3xl text-gray-700 hover:text-blue-700 transition" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl md:text-3xl text-gray-700 hover:text-pink-500 transition" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl md:text-3xl text-gray-700 hover:text-red-600 transition" />
          </a>
        </div>

        <a
          href="Muhammad-Junaid-CV.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <img
          src={junaid}
          alt="Muhammad Junaid"
          className="w-[65vw] md:w-[30vw] h-[65vw] md:h-[30vw] rounded-full mx-auto md:mx-0 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
