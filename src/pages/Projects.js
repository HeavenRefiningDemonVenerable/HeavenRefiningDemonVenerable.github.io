import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';

function ProjectsPage() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList"> {/* Updated className */}
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            id={idx}
            name={project.name}
            image={project.image}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
