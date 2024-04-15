

import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  
 
  const githubUrl = project.githubUrl; 

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} /> 
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {/* Ensure anchor tag wraps the GitHubIcon */}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;