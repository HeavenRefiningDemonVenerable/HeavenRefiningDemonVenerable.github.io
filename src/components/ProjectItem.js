import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css";

function ProjectItem({ image, name, id, description, skills, year, numeral }) {
  const navigate = useNavigate();
  const tags = Array.isArray(skills) ? skills : [];

  const go = () => navigate("/projects/" + id);

  return (
    <div
      className="projectItem"
      role="button"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go()}
    >
      <span className="itemNumeral">{numeral}</span>

      <div className="itemThumb" style={{ backgroundImage: `url(${image})` }} />

      <div className="itemBody">
        <h2>{name}</h2>
        {description && <p className="desc">{description}</p>}
        {tags.length > 0 && <p className="itemMeta">{tags.join(", ")}</p>}
      </div>

      <span className="itemYear">{year}</span>
    </div>
  );
}

export default ProjectItem;
