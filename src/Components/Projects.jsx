import React, { useState } from "react";
import comerzio from "./comerzio.png";
import urbanloop from "./urbanloop.png";
import ecommerce from "./e-commerce.png";
import musicApp from "./music-app.png";
import nutritionist from "./nutrition .png";
import portfolioDesign from "./portfolio design.png";

export const projects = [
  {
    title: "Shop.co - E-commerce Store",
    description: "A modern clothing store featuring product listings, brand filters, and newsletter signup. Built with Next.js and Tailwind CSS, deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://e-commerce-store-ten-omega.vercel.app/",
    image: ecommerce
  },
  {
    title: "Music Academy App",
    description: "An online platform offering music courses, instructor bios, and testimonials. Fully responsive and deployed via Vercel.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://music-app-44qm.vercel.app/",
    image: musicApp
  },
  {
    title: "Comerzio",
    description: "A commerce-focused app for showcasing and managing products. Built using React and Node.js, hosted on Fly.io.",
    tech: ["React", "Node.js", "Fly.io"],
    link: "https://comerzio.fly.dev/",
    image: comerzio,
  },
  {
    title: "Nutritionist Website",
    description: "A personal brand site offering meal plans, pricing tiers, and blogs. Clean UI built with Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://nutritionist-psi.vercel.app/",
    image: nutritionist
  },
  {
    title: "HTML/CSS Portfolio",
    description: "A clean, one-page portfolio highlighting skills, projects, and contact info. Fully static and mobile responsive.",
    tech: ["HTML", "CSS"],
    link: "https://html-css-portfolio-sage-mu.vercel.app/",
    image: portfolioDesign
  },
  {
    title: "UrbanLoop.tech",
    description: "A tech company website showcasing digital solutions. Built with React and Next.js (currently under updates).",
    tech: ["React", "Next.js"],
    link: "https://urbanloop.tech/",
    image: urbanloop, 
  }
  // You can add more projects here as needed
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="text-gray-400 mt-2">
          Explore some of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#161B22] rounded-xl overflow-hidden shadow-lg w-full transition-all duration-300 group flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative pt-[75%] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full object-contain bg-black p-2"
              />
              
              {/* Hover Overlay with Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project Info (Always visible) */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#21262D] text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;