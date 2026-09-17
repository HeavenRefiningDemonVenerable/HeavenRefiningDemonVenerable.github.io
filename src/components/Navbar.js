import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { site } from "../content/site";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <Link to="/" className="wordmark">
        {site.name}
      </Link>

      <div className="toggleButton">
        <button
          onClick={() => setExpandNavbar((prev) => !prev)}
          aria-expanded={expandNavbar}
          aria-label="Toggle navigation"
        >
          {expandNavbar ? "Close" : "Menu"}
        </button>
      </div>

      <div className="navGroup">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </div>

        <span className="navDivider" aria-hidden="true" />

        <div className="socialRail" aria-label="Find me elsewhere">
          <a href={site.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
