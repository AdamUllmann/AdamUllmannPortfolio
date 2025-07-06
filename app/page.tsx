"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Moon,
  Sun,
  Code,
  Database,
  Globe,
  Server,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectCard from "@/components/ProjectCard";
//import SkillBar from "@/components/SkillBar";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [selectedSkill, setSelectedSkill] = useState(null);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "false" ? false : true; // Default to true (dark mode)
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      name: "React",
      image: "/images/React.png",
      description:
        "Built interactive UI components with React for my work, portfolio, & projects.",
    },
    {
      name: "TypeScript",
      image: "/images/TypeScript.png",
      description:
        "Used TypeScript extensively to add type safety to modern web applications.",
    },
    {
      name: "Node.js",
      image: "/images/Node.png",
      description:
        "Created APIs and backend services using Node.js to support full-stack projects.",
    },
    {
      name: "Python",
      image: "/images/Python.png",
      description:
        "Developed scripts and tools in Python for data processing and automation.",
    },
    {
      name: "C++",
      image: "/images/C++.png",
      description:
        "Implemented performance-critical applications and algorithms in C++.",
    },
    {
      name: "Pytorch",
      image: "/images/Pytorch.png",
      description:
        "Developed innovative ML solutions in the audio and video realm.",
    },
    {
      name: "GitHub",
      image: "/images/GitHub.png",
      description:
        "Version control and collaboration using GitHub for all major projects.",
    },
    {
      name: "HTML5",
      image: "/images/HTML5.png",
      description:
        "Structured and presented content for the web using HTML5 and CSS.",
    },
    {
      name: "OpenGL",
      image: "/images/OpenGL.png",
      description:
        "Programmed interactive simulations and 3D graphics applications.",
    },
    {
      name: "Vercel",
      image: "/images/Vercel.png",
      description: "Deployed and hosted Next.js apps seamlessly on Vercel.",
    },
    {
      name: "Juce",
      image: "/images/Juce.png",
      description:
        "Wrote real time audio plugins for low latency production & post-production.",
    },
  ];

  const projects = [
    {
      title: "Project 1",
      description: "This is project 1",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      title: "Antoher one",
      description: "another discription",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind", "Prisma"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Antoher one",
      description: "Antoher one",
      tech: ["React", "D3.js", "Python", "FastAPI", "Pandas"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Antoher one",
      description: "Antoher one",
      tech: ["Next.js", "OpenAI", "WebSocket", "Supabase"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const experience = [
    {
      title: "Software Engineer",
      company: "AJA Video Systems",
      period: "2024 - Present",
      description:
        "Led development of microservices architecture serving 1M+ users, mentored 5 junior developers, and improved system performance by 40%. Architected scalable solutions using React, Node.js, and AWS.",
      achievements: [
        "40% performance improvement",
        "Led team of 8 developers",
        "99.9% uptime achieved",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built scalable web applications from scratch, implemented CI/CD pipelines reducing deployment time by 60%, and collaborated with cross-functional teams to deliver features ahead of schedule.",
      achievements: [
        "60% faster deployments",
        "15+ features delivered",
        "Zero-downtime migrations",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description:
        "Developed responsive web applications for 20+ clients, optimized performance achieving 95+ Lighthouse scores, and worked closely with designers to implement pixel-perfect UIs.",
      achievements: [
        "95+ Lighthouse scores",
        "20+ client projects",
        "100% client satisfaction",
      ],
    },
  ];

  const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 30, suffix: "+" },
    { label: "Code Commits", value: 2500, suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/[0.02] dark:bg-primary/[0.03] rounded-full blur-xl animate-pulse" />

        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/[0.02] dark:bg-purple-500/[0.03] rounded-full blur-xl animate-pulse delay-1000" />

        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-blue-500/[0.02] dark:bg-blue-500/[0.03] rounded-full blur-xl animate-pulse delay-2000" />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.008] dark:opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(currentColor 1px, transparent 1px),
              linear-gradient(90deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Adam Ullmann
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ),
              )}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-pulse">
              AU
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in h-[77px]">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building scalable
            applications that make a difference in people&apos;s lives.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/AdamUllmann"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-ullmann/"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:adamullmannbusiness@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate software engineer with over 5 years of
                experience building web applications and scalable systems. I
                love solving complex problems and turning innovative ideas into
                reality through clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans full-stack development, with a strong focus
                on modern JavaScript frameworks, cloud technologies, and best
                practices in software architecture. I believe in writing code
                that&apos;s not just functional, but maintainable and scalable.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem Solving",
                  "Team Leadership",
                  "Agile Development",
                  "Code Review",
                  "Mentoring",
                  "Architecture Design",
                ].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-secondary hover:bg-accent rounded-full text-sm transition-colors cursor-default"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary mr-2" />
                Quick Facts
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-primary mr-3" />
                  Computer Science Degree
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-5 h-5 text-primary mr-3" />

                  <AnimatedCounter end={5} suffix="+ Years Experience" />
                </li>
                <li className="flex items-center">
                  <Code className="w-5 h-5 text-primary mr-3" />

                  <AnimatedCounter end={50} suffix="+ Projects Completed" />
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-3" />
                  Remote Work Enthusiast
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">☕</span>
                  Coffee Addict & Problem Solver
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div
            className="bg-neutral-30 rounded-3xl pt-10 pb-14 relative w-full max-w-5xl overflow-hidden shadow-lg mx-auto"
            style={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }}
          >
            <div className="relative">
              {/* Top marquee row */}
              <div className="overflow-hidden">
                <div className="flex whitespace-nowrap marquee-container">
                  <div className="flex marquee gap-5">
                    {[...skills, ...skills].map((skill, index) => (
                      <div key={`top-${index}`} className="flex-shrink-0">
                        <div
                          onClick={() => setSelectedSkill(skill)}
                          className="w-[130px] p-6 rounded-xl inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        >
                          <img
                            width={56}
                            height={56}
                            src={skill.image}
                            alt={skill.name}
                          />

                          <p className="text-neutral-900 dark:text-white text-base lg:text-lg mt-2 truncate text-neutral-10">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom marquee row */}
              <div className="overflow-hidden mt-5">
                <div className="flex whitespace-nowrap marquee-container">
                  <div className="flex marquee-reverse gap-5">
                    {[...skills, ...skills].map((skill, index) => (
                      <div key={`bottom-${index}`} className="flex-shrink-0">
                        <div
                          onClick={() => setSelectedSkill(skill)}
                          className="w-[130px] bg-neutral-20 p-6 rounded-xl inline-flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        >
                          <img
                            width={56}
                            height={56}
                            src={skill.image}
                            alt={skill.name}
                          />

                          <p className="text-neutral-900 dark:text-white text-base lg:text-lg mt-2 truncate text-neutral-10">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for Skill Details */}
          {selectedSkill && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={() => setSelectedSkill(null)}
            >
              <div
                className="rounded-xl p-6 max-w-md w-full shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(15px)",
                  textAlign: "center",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {selectedSkill.name}
                </h3>
                <p className="text-neutral-900 dark:text-white">{selectedSkill.description}</p>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                live={project.live}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground bg-secondary px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can bring your ideas to life and
            create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:adamullmannbusiness@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/adam-ullmann/"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Adam Ullmann. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
