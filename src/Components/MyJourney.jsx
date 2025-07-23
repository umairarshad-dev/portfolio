import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Development & AI Certification",
    company: "Codecademy",
    link: "https://www.codecademy.com/",
    date: "Completed in 2024",
    description: "Completed a hands-on Frontend Development and AI course. Built projects using React and JavaScript while learning modern web practices and basic AI concepts.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design", "AI Basics"],
  },
  
  {
    title: "Frontend Developer",
    company: "Urban Loop Tech",
    link: "https://urbanloop.tech/",
    date: "2023 - 2024",
    description: "Worked on a variety of client and in-house projects including portfolio websites, real estate applications, classified ad platforms, and navigation-based systems. Practiced coding consistently through challenges and freelance tasks.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "API Integration", "GitHub", "UI Development"],
  },
  
  {
    title: "Future Journey",
    company: "",
    link: "#",
    date: "2025",
    description: "Currently focused on improving problem-solving, building reusable UI components, and learning advanced patterns in React and Next.js. Continuing to grow through consistent practice, project work, and staying updated with new frontend technologies.",
    tags: ["Problem Solving", "React Patterns", "Next.js", "Clean UI", "Continuous Learning"],
  },
];

const Timeline = () => {
  return (
    <div  id="experience" className="flex flex-col items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-10 px-4">
      <h3 className="text-4xl font-bold mb-6 text-center">My Journey</h3>
      <h1 className="text-xl text-gray-400 mb-6 text-center">Learning and Work Experience</h1>

      <div className="relative  max-w-6xl">
         <motion.div
          className="absolute w-1 h-full left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-500 to-indigo-500 hidden lg:block"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex w-full my-6 items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-5/12 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <a href={exp.link} className="text-blue-400 hover:underline">{exp.company}</a>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-700 px-3 py-1 rounded text-sm">{tag}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
