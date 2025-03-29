import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Development & AI Certification",
    company: "Codecademy",
    link: "https://www.codecademy.com/",
    date: "Completed in 2024",
    description: "Successfully completed a comprehensive Frontend Development and AI course, mastering technologies like React, JavaScript, and modern web development practices.",
    tags: ["HTML", "CSS", "JavaScript", "React", "AI", "+6 more"],
  },
  
  {
    title: "Frontend Developer",
    company: "Urban Loop Tech",
    link: "https://urbanloop.tech/",
    date: "2023 - 2024",
    description: " Built multiple projects, including portfolio websites, real estate applications, classified ads platforms, and navigation-based systems. Practiced problem-solving through coding challenges, open-source contributions, and freelancing projects.",
    tags: ["Algorithms", "Web Development", "Software Engineering" , "React", "Next.js", "Open-Source Contribution"],
  },
  
  {
    title: "Future Journey",
  
    link: "#",
    date: "2025",
    description:"focusing on problem-solving, object-oriented programming, and database management. Developed a strong analytical mindset and a passion for continuous learning. This experience shaped my approach to writing clean, efficient code and exploring new technologies like React, Next.js, and AI-driven solutions.",
    tags: ["Problem Solving", "Continuous Learning", "Modern Web Technologies" , "Freelancing", "Open-Source Contribution"],
  },
  
];

const Timeline = () => {
  return (
    <div  id="experience" className="flex flex-col items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-10 px-4">
      <h3 className="text-4xl font-bold mb-6 text-center">My Journey</h3>
      <h1 className="text-xl text-gray-400 mb-6 text-center">Learning and Work Experience</h1>

      <div className="relative w-full max-w-4xl">
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
