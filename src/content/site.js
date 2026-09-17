// src/content/site.js
//
// Everything on the site that is *words* lives here. To update your name,
// bio, quote, stats, skills, or social links, edit this file only — no
// need to touch any component or CSS.
//
// Projects live in a separate file: src/helpers/ProjectList.js

export const site = {
  name: "Demi Ogboye",
  role: "Computer Science student & software developer",
  affiliation: "Computer Science @ Ontario Tech University",
  location: "Oshawa, Ontario",
  email: "ogboye.demi@gmail.com",

  // Shown in the hero, under the epigraph.
  bio:
    "I'm a Computer Science student focused on full-stack development and " +
    "practical problem-solving. I've built projects in web development and " +
    "explored systems design fundamentals, with a strong focus on writing " +
    "maintainable code and shipping polished user experiences. I have a wide " +
    "range of interests that influence my projects, like poetry, history, " +
    "and philosophy.",

  // The opening epigraph on the homepage. `lines` are rendered as separate
  // lines of verse. Change the quote, author, or source at any time —
  // the layout adapts to however many lines you give it.
  epigraph: {
    lines: [
      "Come, Friend, you too must die. Why moan about it so?",
      "Even Patroclus died, a far, far better man than you.",
      "And look, you see how handsome and powerful I am?",
      "The son of a great man, the mother who gave me life\u2014",
      "A deathless goddess. But even for me, I tell you,",
      "Death and the strong force of fate are waiting.",
      "There will come a dawn or sunset or high noon",
      "When a man will take my life in battle too\u2014",
      "flinging a spear perhaps",
      "Or whipping a deadly arrow off his bow.",
    ],
    author: "Homer",
    source: "The Iliad",
    sourceUrl: "https://www.goodreads.com/work/quotes/3293141",
  },

  // Three short stats shown beneath the hero. Value + label pairs.
  stats: [
    { value: "2+", label: "Years building" },
    { value: "5+", label: "Projects shipped" },
    { value: "3", label: "Languages" },
  ],

  // Skills grouped into short categories, shown as an editorial list.
  skills: [
    {
      title: "Front-end",
      detail: "React, HTML/CSS, responsive UI, accessibility basics",
    },
    {
      title: "Back-end",
      detail: "Node.js, REST APIs, SQL, Git, .NET fundamentals",
    },
    {
      title: "Languages",
      detail: "JavaScript, TypeScript, Java, Python, C, C++, Rust",
    },
  ],

  social: {
    github: "https://github.com/HeavenRefiningDemonVenerable",
    linkedin: "https://www.linkedin.com/in/demi-ogboye-a1b0782a9/",
    instagram: "https://www.instagram.com/itzdemi__/?next=%2F",
  },

  footerNote: "All rights reserved.",

  // Shown as a small row of marks on the homepage — the stories and
  // mythologies that flavor the rest of the site's design. Swap the
  // label/note for anything else you're into; the icon set lives in
  // src/components/Emblems.js, matched by `icon` key below.
  inspirations: [
    {
      icon: "laurel",
      label: "The Iliad",
      note: "Where the homepage epigraph comes from.",
    },
    {
      icon: "valknut",
      label: "Norse mythology",
      note: "Sagas, runes, and the Nine Realms.",
    },
    {
      icon: "skull",
      label: "Skulduggery Pleasant",
      note: "Magic, wit, and a skeleton detective.",
    },
    {
      icon: "torii",
      label: "Anime",
      note: "Character-driven stories with big stakes.",
    },
  ],
};

// Experience timeline, oldest first. `type` is "education" or "work".
// `tags` are shown when a work entry is expanded — edit them to whatever
// skills or tools are most relevant to call out for that role.
export const experience = [
  {
    type: "education",
    date: "2022 - Present",
    title: "Ontario Tech University",
    location: "Oshawa, Ontario",
    subtitle: "Bachelor's Degree, Computer Science",
  },
  {
    type: "work",
    date: "May 2024 - August 2024",
    title: "OddNet",
    location: "Remote",
    subtitle: "Software Engineering Intern",
    description:
      "Developed web applications, collaborated with teams, and contributed " +
      "to software improvements and performance enhancements.",
    tags: ["Web applications", "Team collaboration", "Performance"],
  },
  {
    type: "work",
    date: "August 2024 - March 2025",
    title: "Immigrant Women in Business",
    location: "Toronto, Ontario",
    subtitle: "IT Intern",
    description:
      "Reviewed and maintained the quality of marketing distribution lists, " +
      "improving email targeting by 20%. Built emails, landing pages, and " +
      "other digital assets for direct marketing efforts, and monitored " +
      "website analytics to guide changes that improved site performance by 10%.",
    tags: ["Email marketing", "Landing pages", "Web analytics"],
  },
];

export default site;
