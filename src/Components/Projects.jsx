import React from "react";
import comerzio from "./comerzio.png";
import urbanloop from "./urbanloop.png";

const projects = [
  {
    title: "Comerzio",
    description: "A classified platform to buy and sell unused items effortlessly.",
    tech: ["Remix", "Tailwind", "TypeScript"],
    link: "https://comerzio.fly.dev/",
    image: comerzio,
  },
  {
    title: "Urban Loop Tech",
    description: "A digital agency specializing in modern web solutions.",
    tech: ["TypeScript", "Javascript", "Tailwind"],
    link: "https://urbanloop.tech/",
    image: urbanloop, 
  }
];

const FeaturedProjects = () => {
  return (
    <div id="projects" className="bg-[#0D1117] text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="text-gray-400 mt-2">
          Explore some of my recent work and personal projects
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#161B22] rounded-xl overflow-hidden shadow-lg h-[500px] w-full md:w-[calc(50%-16px)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-50"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#0D1117] bg-opacity-90 backdrop-blur-lg p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#21262D] text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block mt-4 text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;