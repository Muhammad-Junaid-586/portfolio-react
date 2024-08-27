import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import LatestProjects from "./LatestProject";
import ContactUs from "./ContactUs";

const Layout = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <LatestProjects />
      <ContactUs />
    </div>
  );
};

export default Layout;
