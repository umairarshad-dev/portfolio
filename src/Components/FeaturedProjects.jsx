// import React from "react";

// const projects = [
//   {
//     title: "Llama GPT",
//     description:
//       "A web-based GPT interface powered by Llama model, featuring real-time chat.",
//     tech: ["React", "TypeScript", "AI", "Tailwind"],
//     link: "#",
//     image: "/projects/llama-gpt.png",
//   },
//   {
//     title: "URL Shortener",
//     description:
//       "Modern URL shortening service with analytics and custom alias support.",
//     tech: ["Next.js", "MongoDB", "API"],
//     link: "#",
//     image: "/projects/url-shortener.png",
//   },
//   {
//     title: "Portfolio",
//     description:
//       "A modern portfolio website showcasing my projects and skills.",
//     tech: ["React", "TypeScript", "Tailwind"],
//     link: "#",
//     image: "/projects/portfolio.png",
//   },
// ];

// const FeaturedProjects = () => {
//   return (
//     <div className="bg-[#0D1117] text-white py-16 px-6">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold">Featured Projects</h2>
//         <p className="text-gray-400 mt-2">
//           Explore some of my recent work and personal projects
//         </p>
//       </div>

//       <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//           >
//             <img src={project.image} alt={project.title} className="w-full h-60 object-cover opacity-80" />

//             {/* Play Button */}
//             <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full">
//               <span className="text-white text-xl">▶</span>
//             </div>

//             {/* Project Details */}
//             <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-[#161B22] to-transparent">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-gray-300 text-sm mt-1">{project.description}</p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-[#21262D] text-xs px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Visit Project Link */}
//               <a
//                 href={project.link}
//                 className="inline-block mt-4 text-blue-400 hover:underline"
//               >
//                 Visit Project ↗
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;
