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

// Tech pyramid component (inverted pyramid visual)
function TechPyramid() {
  const rows = [
    ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"], // top (widest)
    ["MongoDB", "Tailwind", "Git", "GitHub"],
    ["TypeScript", "JWT"],
    ["CI/CD"],
  ];

  const widths = [
    "w-full md:w-11/12",
    "w-11/12 md:w-3/4",
    "w-10/12 md:w-2/5",
    "w-8/12 md:w-1/5",
  ];

  return (
    <div className="mt-6 mb-10">
      <div className="flex flex-col gap-3 items-center">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`flex flex-wrap justify-center gap-2 ${widths[idx]} mx-auto`}
          >
            {row.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-slate-100 text-gray-800 text-sm font-medium"
              >
                {skill}
              </span>
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
  },
  {
    title: "Personal Diary App",
    description:
      "Personal diary web app with notes management, validation and a clean UI.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/AhmedOueslati/Personal-Diary",
    liveUrl: "https://meek-swan-8e0db1.netlify.app",
  },
  {
    title: "Travel Agency Web App",
    description: "Responsive travel website with multi-page navigation and UI.",
    tech: ["React", "Tailwind CSS", "React Router"],
    githubUrl: "https://github.com/AhmedOues93/Travel-Agency-React",
    liveUrl: "https://jovial-hotteok-975682.netlify.app/",
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

            {/* Tech pyramid (inverted) */}
            <motion.div className="mt-6 mb-10" variants={fadeIn(0.6)}>
              <TechPyramid />
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start gap-5 flex-wrap"
              variants={fadeIn(0.7)}
            >
              <a
                href="#projects"
                className="bg-cyan-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-cyan-800 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="bg-transparent text-cyan-700 font-medium px-6 py-3 rounded-lg border-2 border-cyan-700 hover:bg-cyan-100 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Contact
              </a>
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

              {/* Certificates block */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Zertifikate / Certificates
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>
                      Agile Software Development: Scrum for Developers
                    </strong>{" "}
                    — Project Management Institute (important for professional
                    teamwork)
                  </li>
                  <li>
                    <strong>React: Using TypeScript</strong> — LinkedIn (shows
                    focus on modern, stable tech)
                  </li>
                  <li>
                    <strong>Learning TypeScript</strong> — LinkedIn Learning
                    Community
                  </li>
                  <li>
                    <strong>WordPress Essentiel Training</strong> — LinkedIn
                    (relevant for re-entry into OSS / PHP)
                  </li>
                  <li>
                    <strong>Career Essentials in Software Development</strong> —
                    Microsoft / LinkedIn (demonstrates motivation for
                    professional upskilling)
                  </li>
                </ul>
              </div>
            </div>

            {/* SKILLS & LANGUAGES (right on desktop) */}
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
