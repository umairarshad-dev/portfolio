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
    <section  id="home" className="flex flex-col lg:flex-row items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">

      <div className="w-full sm:w-full lg:w-1/2 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-20 pb-4">
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
          I am a dedicated Frontend Developer specializing in React, Remix, and TypeScript. Passionate about crafting scalable, high-performance web applications with a strong emphasis on user experience, accessibility, and responsiveness. I thrive on solving complex challenges and building innovative digital solutions.</p>

        <div className="flex gap-6 mt-8">
        <a
            href="https://www.linkedin.com/in/umairarshad-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
            aria-label="Connect with me on LinkedIn"
          >
            <FaLinkedinIn size={25} />
          </a>



          <a
            href="https://x.com/umairarshad_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
            aria-label="Connect with me on LinkedIn"
          >
            <FaXTwitter size={25} />
          </a>

          <a
            href="https://github.com/umairarshad-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
            aria-label="Connect with me on LinkedIn"
          >
            < BsGithub size={25} />
          </a>
     
          <a
            href="mailto:umairarshad6697@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
            aria-label="Send me an email"
          >
            <MdEmail size={25} />
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