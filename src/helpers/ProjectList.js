import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";

export const ProjectList = [
  {
    name: "Retro Snake Game Remake",
    image: Proj1,
    year: "2024",
    skills: ["Python", "Pygame"],
    description:
      "A modern remake of Snake with smooth controls, collision logic, scoring, and a clean UI loop.",
    highlights: [
      "Game loop + timing control (FPS) with consistent input handling",
      "Collision detection + state management (game over / restart)",
      "Clean separation of render/update logic",
    ],
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/RetroSnakeGame-Remake",
    demoUrl: "", // optional: add a video or live link later
  },
  {
    name: "WebChat Server",
    image: Proj2,
    year: "2024",
    skills: ["Java", "JavaScript", "HTML", "CSS", "JSON"],
    description:
      "A web-based chat server supporting real-time messaging with a simple client UI.",
    highlights: [
      "Client–server messaging with structured JSON payloads",
      "Basic validation and predictable request/response patterns",
      "Clear separation between UI and server responsibilities",
    ],
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/WebChat-Server",
    demoUrl: "",
  },
  {
    name: "Whiteboard Collaboration Site",
    image: Proj3,
    year: "2024",
    skills: ["Java", "JavaScript", "HTML", "CSS"],
    description:
      "A collaborative whiteboard with an interactive canvas for drawing and sharing ideas in real time.",
    highlights: [
      "Canvas drawing tools + event handling (mouse input)",
      "Real-time collaboration logic (shared state updates)",
      "Simple UX: clear canvas, tool selection, and smooth drawing",
    ],
    githubUrl: "https://github.com/HeavenRefiningDemonVenerable/WhiteboardCollaborationSite",
    demoUrl: "",
  },
];
