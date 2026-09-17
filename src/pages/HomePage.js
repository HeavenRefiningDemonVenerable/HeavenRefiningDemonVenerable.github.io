import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { site } from "../content/site";
import { ProjectList } from "../helpers/ProjectList";
import { ValknutIcon, LaurelIcon, SkullIcon, ToriiIcon } from "../components/Emblems";

// Small roman-numeral converter for the featured-work index (I, II, III...).
function toRoman(num) {
  const table = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let n = num;
  let result = "";
  for (const [value, symbol] of table) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}

const EMBLEM_ICONS = {
  valknut: ValknutIcon,
  laurel: LaurelIcon,
  skull: SkullIcon,
  torii: ToriiIcon,
};



function HomePage() {
  const profileImagePath = process.env.PUBLIC_URL + "/profile.png";
  const featured = ProjectList.slice(0, 3);

  const [wheelBoosted, setWheelBoosted] = useState(false);
  const [openInspiration, setOpenInspiration] = useState(null);

  const spinWheel = () => {
    setWheelBoosted(true);
    setTimeout(() => setWheelBoosted(false), 1600);
  };

  return (
    <div className="homepage">
      <div className="hero">
        <div className="profile-wrap">
          <svg
            className={`fate-wheel${wheelBoosted ? " boosted" : ""}`}
            viewBox="0 0 220 220"
            role="button"
            tabIndex={0}
            aria-label="Give the wheel a spin"
            onClick={spinWheel}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && spinWheel()}
          >
            <circle
              cx="110"
              cy="110"
              r="96"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 10"
            />
            <circle
              cx="110"
              cy="110"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x1 = 110 + 80 * Math.cos(angle);
              const y1 = 110 + 80 * Math.sin(angle);
              const x2 = 110 + 92 * Math.cos(angle);
              const y2 = 110 + 92 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth={i % 4 === 0 ? "2" : "1"}
                />
              );
            })}
          </svg>
          <img src={profileImagePath} alt={site.name} className="profile-image" />
        </div>

        <div className="hero-text">
          <blockquote className="epigraph">
            {site.epigraph.lines.map((line, i) => (
              <span className="line" key={i} style={{ animationDelay: `${i * 90}ms` }}>
                {line}
              </span>
            ))}
          </blockquote>
          <div className="epigraph-source">
            &mdash; {site.epigraph.author},{" "}
            <a href={site.epigraph.sourceUrl} target="_blank" rel="noopener noreferrer">
              {site.epigraph.source}
            </a>
          </div>

          <h1 className="hero-name">{site.name}</h1>
          <p className="hero-role">{site.affiliation}</p>

          <p className="intro-text">{site.bio}</p>

          <div className="hero-actions">
            <Link className="btn primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn ghost" to="/experience">
              Experience
            </Link>
            <a className="btn ghost" href={`mailto:${site.email}`}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="colophon">
        {site.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-key">{s.label}</span>
          </div>
        ))}
      </div>

      {site.inspirations && site.inspirations.length > 0 && (
        <div className="inspirations">
          <h2 className="section-title">Reading the Room</h2>
          <p className="section-subtitle">
            A few stories and mythologies that flavor how I think about building
            things. Tap one for more.
          </p>
          <div className="inspirations-list">
            {site.inspirations.map((insp) => {
              const Icon = EMBLEM_ICONS[insp.icon];
              const isOpen = openInspiration === insp.label;
              return (
                <button
                  type="button"
                  key={insp.label}
                  className={`inspiration${isOpen ? " open" : ""}`}
                  onClick={() => setOpenInspiration(isOpen ? null : insp.label)}
                  aria-expanded={isOpen}
                >
                  {Icon && <Icon aria-hidden="true" />}
                  <span className="label">{insp.label}</span>
                  <span className="note">{insp.note}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="skills-section">
        <div className="section-rule">
          <span className="emblem">
            <ValknutIcon aria-hidden="true" />
          </span>
        </div>
        <h2 className="section-title" style={{ marginTop: 30 }}>Skills</h2>
        <p className="section-subtitle">
          A quick snapshot of tools I'm comfortable with, and actively leveling up.
        </p>
        <div className="skills-list">
          {site.skills.map((skill) => (
            <div className="item" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {featured.length > 0 && (
        <div className="featured-section">
          <div className="section-rule">
            <span className="emblem">
              <LaurelIcon aria-hidden="true" />
            </span>
          </div>
          <h2 className="section-title" style={{ marginTop: 30 }}>Featured Work</h2>
          <p className="section-subtitle">
            A few projects I'm proud of, open them to see more info.
          </p>

          <div className="featured-list">
            {featured.map((p, idx) => (
              <Link to={`/projects/${idx}`} className="featured-row" key={idx}>
                <span className="featured-numeral">{toRoman(idx + 1)}</span>
                <span>
                  <span className="featured-title">{p.name}</span>
                  {p.description && (
                    <span className="featured-desc">{p.description}</span>
                  )}
                </span>
                <span className="featured-year">{p.year}</span>
                {p.image && (
                  <span
                    className="featured-thumb"
                    style={{ backgroundImage: `url(${p.image})` }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="featured-more">
            <Link className="text-link" to="/projects">
              See all projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
