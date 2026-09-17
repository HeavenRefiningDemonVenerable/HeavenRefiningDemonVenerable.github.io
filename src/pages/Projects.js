import React, { useMemo, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

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

function normalizeSkills(skills) {
  if (!skills) return [];
  if (Array.isArray(skills)) return skills.map((s) => String(s).trim()).filter(Boolean);
  return String(skills)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function Projects() {
  const [query, setQuery] = useState("");
  const [activeSkill, setActiveSkill] = useState("All");

  const enriched = useMemo(() => {
    return ProjectList.map((p, idx) => ({
      ...p,
      __id: idx,
      normalizedSkills: normalizeSkills(p.skills),
    }));
  }, []);

  const allSkills = useMemo(() => {
    const s = new Set();
    enriched.forEach((p) => p.normalizedSkills.forEach((x) => s.add(x)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [enriched]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return enriched.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        p.normalizedSkills.some((x) => x.toLowerCase().includes(q));

      const matchesSkill =
        activeSkill === "All" || p.normalizedSkills.includes(activeSkill);

      return matchesQuery && matchesSkill;
    });
  }, [query, activeSkill, enriched]);

  return (
    <div className="projects">
      <div className="projectsHeader">
        <h1>Projects</h1>
        <p className="projectsSub">
          A small number of things I've built when the mood has taken me, I am
          always consistently working towards making new stuff. It is my calling.
        </p>

        <div className="controls">
          <input
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by project, tech, or keyword..."
            aria-label="Search projects"
          />

          <div className="chips" role="list" aria-label="Filter by skill">
            {allSkills.map((s) => (
              <button
                key={s}
                className={`chip ${activeSkill === s ? "active" : ""}`}
                onClick={() => setActiveSkill(s)}
                type="button"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="resultCount">
            Showing <b>{filtered.length}</b> {filtered.length === 1 ? "project" : "projects"}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="emptyState">
          <h2>No results</h2>
          <p>Try a different keyword or clear the filter.</p>
          <button
            className="btn ghost"
            type="button"
            onClick={() => {
              setQuery("");
              setActiveSkill("All");
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="projectList">
          {filtered.map((project, idx) => (
            <ProjectItem
              id={project.__id}
              key={project.__id}
              numeral={toRoman(idx + 1)}
              name={project.name}
              image={project.image}
              description={project.description}
              skills={project.normalizedSkills}
              year={project.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
