import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay'; // Make sure to import this
import EducationPage from './pages/Experience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will show on every page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} /> {/* Route for individual project */}
          <Route path="/experience" element={<EducationPage />} />
          {/* You can add a Route for a not found page as well */}
        </Routes>
        <Footer /> {/* Footer will show on every page */}
      </div>
    </Router>
  );
}

export default App;
