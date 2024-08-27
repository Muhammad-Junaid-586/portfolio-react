import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import HtmlProjectsPage from "./component/HtmlProjectsPage.jsx";
import Layout from "./component/Layout.jsx";
import "./index.css";
import CssProjectsPage from "./component/BootstrapProjectsPage.jsx";
import JavascriptProjectsPage from "./component/JavascriptProjectsPage.jsx";
import BootstrapProjectsPage from "./component/BootstrapProjectsPage.jsx";
import ReactProjectsPage from "./component/ReactProjectsPage.jsx";
import UrraanProjects from "./component/UrraanProjects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Layout />} /> {/* Default route for "/" */}
          <Route path="/projects/html" element={<HtmlProjectsPage />} />
          <Route
            path="/projects/bootstrap"
            element={<BootstrapProjectsPage />}
          />
          <Route
            path="/projects/javascript"
            element={<JavascriptProjectsPage />}
          />
          <Route path="/projects/reactjs" element={<ReactProjectsPage />} />
          <Route path="/projects/urraan" element={<UrraanProjects />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
