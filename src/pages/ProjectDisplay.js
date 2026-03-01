import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <div className="projectCard">
        <h1>{project.name}</h1>

        <div className="media">
          <img src={project.image} alt={project.name} />
        </div>

        <div className="meta">
          <p className="skillsLine">
            <span className="label">Skills</span>
            <span className="value">{project.skills}</span>
          </p>

          <p className="desc">{project.description}</p>

          <a className="githubBtn" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
