import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css";

function ProjectItem({ image, name, id, description }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItem;
