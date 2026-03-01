import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

let ProjectList = null;
try {
  // If this exists in your repo, we’ll show Featured Projects automatically.
  // If it doesn't, nothing breaks.
  // eslint-disable-next-line global-require
  ProjectList = require("../helpers/ProjectList").ProjectList;
} catch (e) {
  ProjectList = null;
}

function HomePage() {
  const profileImagePath = process.env.PUBLIC_URL + "/profile.png";

  const featured = Array.isArray(ProjectList) ? ProjectList.slice(0, 3) : [];

  return (
    <div className="homepage">
      <div className="profile-image-container">
        <img src={profileImagePath} alt="Demi Ogboye" className="profile-image" />
      </div>

      <div className="intro-container">
        <p
          style={{
            margin: "0 0 10px 0",
            fontSize: 13,
            letterSpacing: 0.8,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.68)",
          }}
        >
          Computer Science @ Ontario Tech • Software Developer
        </p>

        <h1>Human Life is like a gamble with no odds, eventually we will all lose our priviledge of playing this game. -- Usogui</h1>

        <p className="intro-text">
          I’m a Computer Science student focused on full-stack development and practical problem-solving.
          I’ve built projects in web development and explored System Design fundamentals, with a
          strong focus on writing maintainable code and shipping polished user experiences.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 14 }}>
          <Link className="btn primary" to="/projects">View Projects</Link>
          <Link className="btn" to="/experience">Experience</Link>
          <a className="btn ghost" href="mailto:ogboye.demi@gmail.com">Contact</a>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-value">2+</span>
            <span className="stat-key">Years building</span>
          </div>
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-key">Projects shipped</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-key">Languages</span>
          </div>
        </div>

        <div style={{ marginTop: 10, color: "rgba(255,255,255,0.68)" }}>
          <a
            href="https://github.com/HeavenRefiningDemonVenerable"
            target="_blank"
            rel="noreferrer"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.18)" }}
          >
            GitHub
          </a>
          <span style={{ opacity: 0.6, margin: "0 10px" }}>•</span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.18)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="skills">
        <h2 style={{ margin: "0 0 8px 0" }}>Skills</h2>
        <p style={{ margin: "0 0 16px 0", color: "rgba(255,255,255,0.68)" }}>
          A quick snapshot of tools I’m comfortable with (and actively leveling up).
        </p>

        <div className="list">
          <div className="item">
            <h3>Front-End</h3>
            <p>React, HTML/CSS, responsive UI, accessibility basics</p>
          </div>
          <div className="item">
            <h3>Back-End</h3>
            <p>Node.js, REST APIs, .NET fundamentals</p>
          </div>
          <div className="item">
            <h3>Languages</h3>
            <p>JavaScript, Java, Python, C++</p>
          </div>
        </div>
      </div>

      {featured.length > 0 && (
        <div className="skills" style={{ marginTop: 18 }}>
          <h2 style={{ margin: "0 0 8px 0" }}>Featured Projects</h2>
          <p style={{ margin: "0 0 16px 0", color: "rgba(255,255,255,0.68)" }}>
            A few projects I’m proud of — click for details, tech, and links.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {featured.map((p, idx) => (
              <Link
                key={idx}
                to={`/projects/${idx}`}
                className="item"
                style={{ textAlign: "left" }}
              >
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{p.name}</div>
                <div style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>
                  {p.description || "Project details, build notes, and links."}
                </div>
                {p.skills && (
                  <div style={{ marginTop: 10, fontSize: 13, opacity: 0.9 }}>
                    {p.skills}
                  </div>
                )}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 14 }}>
            <Link className="btn" to="/projects">See all projects</Link>
          </div>

          <style>
            {`
              @media (max-width: 860px) {
                .skills div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}

export default HomePage;
