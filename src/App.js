import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import EducationPage from './pages/Experience';
import NotFoundPage from './pages/NotFound'; // Add a NotFound page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<EducationPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
