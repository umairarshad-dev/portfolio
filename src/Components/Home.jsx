import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import profilePic from "./profile.png";
import { MdOutlinePhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";



const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white border-b-4 border-[#2d3748] overflow-hidden">
      {/* Animated background dots for subtle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `}</style>

      <div className="w-full sm:w-full lg:w-1/2 flex flex-col justify-center items-center">
        <h1 className=" container  text-4xl md:text-5xl font-bold leading-tight mt-20 pb-4">
          Hello!
          <div className="py-2"></div>
          <span className="text-blue-400 whitespace-nowrap">
            I'm {""}
            <Typewriter
              words={["M Umair Arshad"]}
              loop={false} 
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={80}
            />
          </span>{" "}
        </h1>

        <div className="lg:hidden p-10">
          <img
            src={profilePic}
            alt="Muhammad Umair Arshad"
            className="w-42 h-42 md:w-40 md:h-40 rounded-full border-4 border-gray-600 shadow-lg object-cover"
          />
        </div>

        <p className="max-w-xl text-gray-300 text-lg leading-relaxed text-center">
          I'm a results-driven Frontend Engineer skilled in React.js, Next.js, Remix, and TypeScript. I specialize in developing high-performance, SEO-friendly, and responsive web applications that prioritize user experience, accessibility, and modern design principles. With a passion for clean code and scalable architecture, I thrive on transforming complex requirements into innovative, production-ready digital solutions.          </p>

        <div className="flex gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/umairarshad-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300 relative group"
            aria-label="Connect with me on LinkedIn"
          >
            <FaLinkedinIn size={25} />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="relative">
                <div className="bg-gray-700 text-white py-2 px-4 rounded-md font-medium text-sm shadow-lg border border-gray-600">LinkedIn</div>
                <div className="absolute h-2 w-2 bg-gray-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-gray-600"></div>
              </div>
            </div>
          </a>

          <a
            href="https://x.com/umairarshad_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300 relative group"
            aria-label="Follow me on Twitter"
          >
            <FaXTwitter size={25} />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="relative">
                <div className="bg-gray-700 text-white py-2 px-4 rounded-md font-medium text-sm shadow-lg border border-gray-600">Twitter/X</div>
                <div className="absolute h-2 w-2 bg-gray-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-gray-600"></div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/umairarshad-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300 relative group"
            aria-label="Check my GitHub"
          >
            <BsGithub size={25} />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="relative">
                <div className="bg-gray-700 text-white py-2 px-4 rounded-md font-medium text-sm shadow-lg border border-gray-600">GitHub</div>
                <div className="absolute h-2 w-2 bg-gray-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-gray-600"></div>
              </div>
            </div>
          </a>

          <a
            href="mailto:umairarshad6697@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300 relative group"
            aria-label="Send me an email"
          >
            <MdEmail size={25} />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="relative">
                <div className="bg-gray-700 text-white py-2 px-4 rounded-md font-medium text-sm shadow-lg">Email</div>
                <div className="absolute h-2 w-2 bg-gray-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-gray-600"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 justify-center items-center pt-20">
        <img
          src={profilePic}
          alt="Muhammad Umair Arshad"
          className="w-70 h-60 rounded-full border-2 border-gray-600 shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;