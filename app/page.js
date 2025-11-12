"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBriefcase,
  IconMail,
  IconPhone,
  IconUsers,
  IconLanguage,
} from "@tabler/icons-react";
import ProjectCard from "../components/ProjectCard";

// simple fade animation generator
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut", delay },
});

// Tech pyramid using skillicons (icons per skill)
function TechPyramidIcons() {
  const rows = [
    // 1. FRONTEND: Ligne mta3 l-Frontend (7 skills)
    [
      { key: "html", label: "HTML" },
      { key: "css", label: "CSS" },
      { key: "js", label: "JavaScript" },
      { key: "react", label: "React" },
      { key: "tailwind", label: "Tailwind CSS" }, // 7aṭṭineha m3a l-Frontend
      { key: "typescript", label: "TypeScript" }, // 7aṭṭineha m3a l-Frontend
      { key: "wordpress", label: "WordPress" }, // 7aṭṭineha m3a l-Frontend
    ],
    // 2. BACKEND: Ligne mta3 l-Backend (5 skills)
    [
      { key: "nodejs", label: "Node.js" },
      { key: "express", label: "Express" },
      { key: "mongodb", label: "MongoDB" },
      { key: "php", label: "PHP" },
      { key: "jwt", label: "JWT" }, // 7aṭṭineh m3a l-Backend/Security
    ],
    // 3. TOOLS / DEVOPS: Ligne mta3 l-Outils (3 skills)
    [
      { key: "git", label: "Git" },
      { key: "github", label: "GitHub" },
      { key: "docker", label: "CI/CD" },
    ],
  ];

  // widths produce the inverted pyramid visual - RAPPEL: l-visual 7asb l-7ajm mta3 koull ligne (wide, medium, narrow)
  // L'ordre des lignes t'wa ywalli: Frontend (widest), Backend (medium), Tools (narrowest).
  const widths = ["w-full", "w-4/5 md:w-2/3", "w-1/2 md:w-1/3"];

  return (
    <div className="mt-10 mb-10">
      {" "}
      {/* ZEDNA L-ESPACE (mt-10) */}
      <div className="flex flex-col gap-4 items-center">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`flex flex-wrap justify-center gap-4 ${widths[idx]} mx-auto p-2 border-b border-gray-200 last:border-b-0`}
          >
            {row.map((skill) => (
              <div
                key={skill.key}
                className="flex flex-col items-center gap-1"
                title={skill.label}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${skill.key}`}
                  alt={skill.label}
                  className="h-10 md:h-12 lg:h-14"
                  width={56}
                  height={56}
                />
                <span className="text-xs text-gray-600 hidden md:block">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const projectsData = [
  {
    title: "popAUC - Full-Stack Auction Platform",
    description:
      "Modern art auction web app with auth, Cloudinary uploads and live bidding.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    githubUrl: "https://github.com/ThomasKoob/artRISE",
    liveUrl: null,
    // CHECK THIS PATH CAREFULLY!
    imageUrl: "/popAUC-pic.png",
  },
  {
    title: "Personal Diary",
    description:
      "Personal diary web app with notes management, validation and a clean UI.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/AhmedOueslati/Personal-Diary",
    liveUrl: "https://meek-swan-8e0db1.netlify.app",
    imageUrl: "/Personal-Diary-pic.png",
  },
  {
    title: "Travel Agency Web App",
    description: "Responsive travel website with multi-page navigation and UI.",
    tech: ["React", "Tailwind CSS", "React Router"],
    githubUrl: "https://github.com/AhmedOues93/Travel-Agency-React",
    liveUrl: "https://jovial-hotteok-975682.netlify.app/",
    imageUrl:  "/Travel-Agency-pic.png",
  },
];
const education = [
  {
    title: "Full-Stack Web & App Development (MERN)",
    institution: "WBS Coding School",
    date: "06/2025 - 10/2025",
    description:
      "Intensive 17-week bootcamp (680 hours) focused on the MERN stack.",
  },
  {
    title: "Partial Recognition as 'Fachinformatiker - AE'",
    institution: "IHK FOSA",
    date: "09/2025",
    description:
      "Partial equivalence with the German reference profession 'Fachinformatiker - Anwendungsentwicklung'.",
  },
  {
    title: "Technicien Supérieur - Multimedia & Marketing",
    institution: "CSFT Tunis",
    date: "2018",
    description: "State-recognized vocational qualification.",
  },
  {
    title: "Abitur - Technical Sciences",
    institution: "Gaafour Gymnasium",
    date: "2012",
    description: "Baccalaureate certificate, technical sciences.",
  },
];

const certificates = [
  {
    title: "Agile Software Development: Scrum for Developers",
    issuer:
      "Project Management Institute (important for professional teamwork)",
  },
  {
    title: "React: Using TypeScript",
    issuer: "LinkedIn (shows focus on modern, stable tech)",
  },
  {
    title: "Learning TypeScript",
    issuer: "LinkedIn Learning Community",
  },
  {
    title: "Career Essentials in Software Development",
    issuer:
      "Microsoft / LinkedIn (demonstrates motivation for professional upskilling)",
  },
];

const softSkills = [
  "Teamwork",
  "Willingness to learn",
  "Creativity",
  "Solution oriented",
  "Reliability",
];

const languages = [
  "Arabic (Native)",
  "German (B2)",
  "English (B1)",
  "French (B2)",
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        id="home"
        className="flex items-center justify-center min-h-screen
                        bg-gradient-to-b from-cyan-50 to-white px-4 py-24"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 relative z-10">
          {/* Text column */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              variants={fadeIn(0.2)}
            >
              Ahmed Oueslati
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-light text-cyan-700 mb-6"
              variants={fadeIn(0.4)}
            >
              Junior Full-Stack Web Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
              variants={fadeIn(0.5)}
            >
              Motivated junior full-stack developer with hands-on MERN training
              and a passion for modern JavaScript and creative web solutions.
            </motion.p>

            {/* Tech pyramid (icon-based, inverted) - FINAL REFINED LAYOUT */}
            <motion.div className="mt-6 mb-10" variants={fadeIn(0.6)}>
              <TechPyramidIcons />
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            variants={fadeIn(0.1)}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/ahmedbild.jpg"
              alt="Photo of Ahmed Oueslati"
              width={320}
              height={320}
              priority
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn(0.1)}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* EDUCATION (left on desktop) */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <IconBriefcase size={26} /> Education & Qualifications
              </h2>

              {/* Education Timeline */}
              <div className="space-y-5 border-l-2 border-cyan-700 pl-5">
                {education.map((edu) => (
                  <div key={edu.title} className="relative">
                    <div className="absolute -left-[30px] top-1 h-4 w-4 bg-cyan-700 rounded-full border-4 border-white"></div>
                    <span className="text-sm font-medium text-gray-500">
                      {edu.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {edu.title}
                    </h3>
                    <p className="text-cyan-700 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS & LANGUAGES & CERTIFICATES (right on desktop) */}
            <div className="w-full space-y-6">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <IconUsers size={26} /> Soft Skills
                </h2>

                {/* centered compact badges that wrap */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-100 text-gray-800 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <IconLanguage size={26} /> Languages
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full bg-slate-100 text-gray-800 text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* CERTIFICATES - Consistent Styling with ICON ADDED */}
                <div className="mt-8">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                    <IconBriefcase size={26} /> Certificates
                  </h3>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <div key={index}>
                        <h4 className="text-xl font-bold text-gray-900">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn()}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Projects
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Selected projects I built.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {projectsData.map((project) => (
              <motion.div key={project.title} variants={fadeIn()}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-4 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn()}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Interested in working together? Get in touch.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              variants={fadeIn(0.2)}
              className="p-6 rounded-lg shadow-md flex-1 bg-white"
            >
              <IconMail size={36} className="mx-auto text-cyan-700 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Email
              </h3>
              <p className="text-gray-600 mb-2">Write me at</p>
              <a
                href="mailto:oueslatiahmed38@gmail.com"
                className="text-cyan-700 font-medium break-all"
              >
                oueslatiahmed38@gmail.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn(0.4)}
              className="p-6 rounded-lg shadow-md flex-1 bg-white"
            >
              <IconPhone size={36} className="mx-auto text-cyan-700 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Phone
              </h3>
              <p className="text-gray-600 mb-2">Call me</p>
              <a
                href="tel:+4915226634552"
                className="text-cyan-700 font-medium"
              >
                +49 152 26634552
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
