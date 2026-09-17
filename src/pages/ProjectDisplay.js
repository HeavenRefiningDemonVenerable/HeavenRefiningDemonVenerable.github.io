import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  if (!project) {
    return (
      <div className="project">
        <div className="projectCard">
          <Link to="/projects" className="backLink text-link">
            &larr; Back to projects
          </Link>
          <h1>Project not found</h1>
          <p className="desc">
            That project doesn't exist, or the link is out of date.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="project">
      <div className="projectCard">
        <Link to="/projects" className="backLink text-link">
          &larr; Back to projects
        </Link>

        <h1>{project.name}</h1>
        {project.year && <p className="projectYear">{project.year}</p>}

        {project.image && (
          <div className="media">
            <img src={project.image} alt={project.name} />
          </div>
        )}

        <p className="skillsLine">
          <span className="label">Built with</span>
          <span className="value">{project.skills}</span>
        </p>

        <p className="desc">{project.description}</p>

        {project.githubUrl && (
          <a
            className="text-link githubBtn"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="small" style={{ marginRight: 6, verticalAlign: "-4px" }} />
            View source
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
