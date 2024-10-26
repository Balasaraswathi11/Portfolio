import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* Home route shows all components */}
          <Route path="/" element={
            <>
              <Intro />
              <About />
              <Project />
              <Resume />
              <Contact />
            </>
          } />
          {/* Other routes show only the specific component */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
