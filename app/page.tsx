"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaCode,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaRegCirclePlay,
  FaChevronDown,
} from "react-icons/fa6";
import {
  SiApache,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbBrandVscode, TbDatabase, TbApi } from "react-icons/tb";
import { BiSolidDashboard, BiGitBranch } from "react-icons/bi";

type Project = {
  title: string;
  description: string;
  details: string[];
  stack: string[];
  repo: string;
  visit?: string;
};

type Skill = {
  label: string;
  icon: ReactNode;
};

const experience = {
  role: "Open Source And Project Developer",
  company: "Self Driven Learning",
  period: "Ongoing",
  details: [
    "Built and maintained full-stack projects with auth, APIs, and clean architecture.",
    "Focused on DX, predictable backend design, and user-first frontend flows.",
    "Working daily with Next.js, Express.js, TypeScript, and modern tooling.",
  ],
};

const projects: Project[] = [
  {
    title: "Routemate",
    description: "Help users find route mates.",
    details: [
      "Route discovery workflows with practical matching ideas.",
      "Clean component design and straightforward UX flows.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO"],
    repo: "https://github.com/AyushK101/routemate",
  },
  {
    title: "Greengrid",
    description: "Smart energy management system.",
    details: [
      "Energy-focused product direction with actionable views.",
      "Frontend and backend coordination for dashboard experiences.",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Docker"],
    repo: "https://github.com/AyushK101/main-greengrid",
  },
  {
    title: "Streamy",
    description: "YouTube-like streaming backend.",
    details: [
      "Media/backend workflow primitives for scalable APIs.",
      "Built with practical service boundaries and reusable modules.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    repo: "https://github.com/AyushK101/yt-backend",
  },
  {
    title: "News Website",
    description: "Simple and fast news website.",
    details: [
      "Readable, lightweight frontend focused on fast browsing.",
      "Built with reusable patterns and clear structure.",
    ],
    stack: ["React", "TailwindCSS", "JavaScript"],
    repo: "https://github.com/AyushK101/news-website-react-router",
  },
  {
    title: "We-Blog",
    description: "Medium-like blog website.",
    details: [
      "Publishing flows and app architecture with Appwrite integration.",
      "Focused on practical writing and reading experience.",
    ],
    stack: ["React", "Appwrite", "TypeScript"],
    repo: "https://github.com/AyushK101/blog-appwrite-react-077",
  },
];

const skills = [
  {
    label: "TailwindCSS",
    icon: <SiTailwindcss className="skill-icon skill-cyan" />,
  },
  {
    label: "JavaScript",
    icon: <SiJavascript className="skill-icon skill-yellow" />,
  },
  {
    label: "TypeScript",
    icon: <SiTypescript className="skill-icon skill-blue" />,
  },
  { label: "React", icon: <SiReact className="skill-icon skill-cyan" /> },
  {
    label: "Next.js",
    icon: <SiNextdotjs className="skill-icon skill-white" />,
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="skill-icon skill-green" />,
  },
  { label: "Express.js", icon: <FaCode className="skill-icon skill-gray" /> },
  { label: "MongoDB", icon: <SiMongodb className="skill-icon skill-green" /> },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql className="skill-icon skill-blue" />,
  },
  { label: "NeonDB", icon: <TbDatabase className="skill-icon skill-green" /> },
  {
    label: "NextAuth",
    icon: <BiSolidDashboard className="skill-icon skill-purple" />,
  },
  { label: "Zod", icon: <SiZod className="skill-icon skill-blue" /> },
  {
    label: "Zustand",
    icon: <BiGitBranch className="skill-icon skill-amber" />,
  },
  { label: "Redis", icon: <SiRedis className="skill-icon skill-red" /> },
  { label: "Docker", icon: <FaDocker className="skill-icon skill-blue" /> },
  {
    label: "WebSocket",
    icon: <FaCode className="skill-icon skill-white" />,
  },
  { label: "CI/CD", icon: <TbApi className="skill-icon skill-blue" /> },
  { label: "Turborepo", icon: <SiApache className="skill-icon skill-red" /> },
  { label: "LangChain", icon: <FaCode className="skill-icon skill-cyan" /> },
  { label: "MCP", icon: <TbBrandVscode className="skill-icon skill-orange" /> },
  {
    label: "Postman",
    icon: <FaRegCirclePlay className="skill-icon skill-orange" />,
  },
  { label: "Git", icon: <FaGitAlt className="skill-icon skill-orange" /> },
  {
    label: "VS Code",
    icon: <TbBrandVscode className="skill-icon skill-blue" />,
  },
];

const connect = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayushk101/" },
  { label: "GitHub", href: "https://github.com/AyushK101/" },
  { label: "Twitter", href: "https://x.com/Ayushk_101" },
  { label: "Email", href: "mailto:ayushk101.dev@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/ayush1004nv/" },
];

function formatTime() {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  }).format(new Date());
}

function formatDateLine() {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

export default function Home() {
  const [time, setTime] = useState(() => formatTime());
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(0);
  const dateLine = useMemo(() => formatDateLine(), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="site-root">
      <div className="content-col">
        <header className="top-meta">
          <p>{time}</p>
        </header>

        <section className="intro-block">
          <div className="intro-head">
            <div>
              <h1 className="name">Ayush Kumar</h1>
              <p className="role">Full-stack Developer</p>
            </div>

            <div className="passport-frame">
              <img src="/self.jpeg" alt="Ayush Kumar" />
            </div>
          </div>

          <p>
            I build <span className="accent">full-stack applications</span>.
            Passionate about creating projects that make a
            <span className="accent"> real-world impact</span>. I focus on clean
            code and user experience.
          </p>
          <p>
            Previously worked on personal and open-source products focused on
            reliable web architecture.
          </p>
          <p>
            I work with <span className="strong">Next.js</span> and
            <span className="strong"> Express.js</span> most days, using
            <span className="strong"> TypeScript</span> for type safety.
          </p>
          <p>
            Open to <span className="strong">collaborations</span> and
            <span className="strong"> opportunities</span>. Feel free to reach
            out!
          </p>
        </section>

        <section className="section-block">
          <p className="section-label">Experience</p>
          <article className="panel">
            <div className="row-between">
              <h2>{experience.role}</h2>
              <p className="dim">{experience.period}</p>
            </div>
            <p className="company">▣ {experience.company}</p>
            <details className="details-wrap">
              <summary>Know More</summary>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>
          </article>
        </section>

        <section className="section-block">
          <p className="section-label">Projects I&apos;ve Built</p>
          <div className="stack-list">
            {projects.map((project, index) => (
              <article
                className={`panel project-card ${expandedProjectIndex === index ? "project-card--open" : ""}`}
                key={project.repo}
              >
                <div className="project-top">
                  <h2>{project.title}</h2>
                  <p className="desc">{project.description}</p>
                </div>
                {expandedProjectIndex === index ? (
                  <>
                    <div className="project-divider" />
                    <ul className="project-details-open">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-tags">
                      {project.stack.map((item) => (
                        <span key={item} className="project-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}
                <div className="project-footer">
                  <button
                    type="button"
                    className="know-more"
                    onClick={() =>
                      setExpandedProjectIndex(
                        expandedProjectIndex === index ? -1 : index,
                      )
                    }
                  >
                    Know More
                    <FaChevronDown
                      className={`icon-xs ${expandedProjectIndex === index ? "is-open" : ""}`}
                    />
                  </button>
                  <div className="project-actions">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <FaGithub className="icon-sm" />
                      <span>Repo</span>
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <span>Visit</span>
                      <FaArrowRight className="icon-sm" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="more-link">More Projects ˅</p>
        </section>

        <section className="section-block">
          <p className="section-label">Skills &amp; Tools</p>
          <div className="skills-wrap">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill.label}>
                {skill.icon}
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
        </section>

        <section className="section-block connect-block">
          <p className="section-label">Connect with Me</p>
          <div className="connect-wrap">
            {connect.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="footer-line">
          <span>{dateLine}</span>
          <span>Delhi/India</span>
        </footer>
      </div>
    </main>
  );
}
