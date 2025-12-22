export const personalInfo = {
  name: "Gaurav Dharmadhikari",
  title: "",
  tagline: "A passionate full-stack developer crafting beautiful and functional web experiences.",
  email: "john.doe@example.com",
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    email: "mailto:john.doe@example.com"
  }
};

export const aboutMe = {
  paragraphs: [
    "I'm a full-stack developer with over 5 years of experience building web applications. I specialize in React, Node.js, and modern web technologies. I'm passionate about creating clean, efficient code and delivering exceptional user experiences.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
  ]
};

export const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", "Python",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "Git", "AWS",
  "Docker", "REST APIs", "GraphQL", "Redux", "Next.js"
];

export const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Lead frontend development for enterprise applications. Mentored junior developers and implemented best practices for code quality."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Improved application performance by 40%."
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Built responsive websites and web applications. Collaborated with designers to implement pixel-perfect interfaces."
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce solution with React, Node.js, and PostgreSQL. Implemented payment integration and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example.com",
    github: "https://github.com/johndoe/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Developed a collaborative task management tool with real-time updates using WebSockets and Redux for state management.",
    tech: ["React", "WebSocket", "Redux", "Express"],
    link: "https://example.com",
    github: "https://github.com/johndoe/taskapp"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Created a responsive weather application using OpenWeather API with location-based forecasts and historical data visualization.",
    tech: ["React", "Chart.js", "REST API", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/johndoe/weather"
  }
];

export const adminConfig = {
  defaultPassword: "admin123" // Change this in production!
};