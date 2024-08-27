import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* Renders the matched route's element */}
      <Footer />
    </div>
  );
};

export default App;
