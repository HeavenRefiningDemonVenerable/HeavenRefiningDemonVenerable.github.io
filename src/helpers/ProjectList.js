// src/helpers/ProjectList.js
//
// One entry per project, filled in from your resume. Add a project by
// copying the shape below and pushing it onto the array — the homepage,
// the /projects index, and each project's detail page all read from
// this one list automatically. Ordered newest first; reorder freely.
//
// `image` paths are placeholders under /public/projects/ — drop your
// screenshots in there with matching filenames (or edit the paths) and
// they'll show up everywhere automatically.

export const ProjectList = [
  {
    name: "Daemon File Watcher",
    year: "2025",
    image: process.env.PUBLIC_URL + "/projects/daemon-file-watcher.jpg",
    description:
      "A Rust-based background daemon that monitors a file system in real " +
      "time, using the notify crate to detect directory changes and file " +
      "events as they happen.",
    skills: "Rust, Systems programming, File I/O",
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/Rust-Daemon-File-Watcher",
  },
  {
    name: "Retro Snake Game",
    year: "2024",
    image: process.env.PUBLIC_URL + "/projects/retro-snake-game.jpg",
    description:
      "A remake of the classic arcade snake game in Python and Pygame, " +
      "structured around object-oriented principles with collision " +
      "detection, score tracking, and game-state management.",
    skills: "Python, Pygame, Object-oriented design",
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/RetroSnakeGame-Remake",
  },
  {
    name: "WebChat-Server",
    year: "2024",
    image: process.env.PUBLIC_URL + "/projects/webchat-server.jpg",
    description:
      "A Java-based multi-client chat server enabling real-time " +
      "communication between users, built with socket programming to " +
      "handle concurrent client connections.",
    skills: "Java, Sockets, Multithreading",
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/WebChat-Server",
  },
  {
    name: "Personal Portfolio",
    year: "2023 - Present",
    image: process.env.PUBLIC_URL + "/projects/personal-portfolio.jpg",
    description:
      "A fully responsive personal portfolio built with React and modern " +
      "JavaScript, deployed and maintained on GitHub Pages with " +
      "cross-browser compatibility in mind. (This site.)",
    skills: "React, JavaScript, GitHub Pages",
    // This is your live site, not a source repo — swap in the actual
    // repo URL here if you'd rather "View source" link there instead.
    githubUrl: "https://heavenrefiningdemonvenerable.github.io",
  },
];

export default ProjectList;
