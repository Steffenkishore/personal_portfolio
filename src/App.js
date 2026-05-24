// src/App.jsx
import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import "./components.css";
import About from "./Components/About/about";
import Home from "./Components/Home/home";
import Education from "./Components/Education/education";
import Skills from "./Components/Skills/skills";
import Experience from "./Components/Experience/experience";
import Projects from "./Components/Projects/projects";
import Certificates from "./Components/Certificate/certificate";
import Contact from "./Components/Contact/contact";
import Navbar from "./Components/Navbar/navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


const App = () => {

  return (
    <div className="app">
      {/* Main Content */}
      <main>

        <Navbar />
        
        <Toaster position="top-right" reverseOrder={false} />
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />

        <ScrollToTop />
        
      </main>
    </div>
  );
};

export default App;
