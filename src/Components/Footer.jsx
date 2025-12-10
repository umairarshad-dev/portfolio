import { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);
  const resumeUrl = process.env.REACT_APP_RESUME_URL || "https://your-resume-link.com/resume.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-gray-400 py-6 flex flex-col items-center justify-center pb-4 relative">
      <p className="text-sm">&copy; 2025 Muhammad Umair Arshad. All rights reserved.</p>

      <div className="flex gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/umairarshad-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300 relative group"
          aria-label="Connect with me on LinkedIn"
        >
          <FaLinkedinIn size={25} className="text-white" />
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
          <FaXTwitter size={25} className="text-white" />
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
          <BsGithub size={25} className="text-white" />
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
          <MdEmail size={25} className="text-white" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="relative">
              <div className="bg-gray-700 text-white py-2 px-4 rounded-md font-medium text-sm shadow-lg border border-gray-600">Email</div>
              <div className="absolute h-2 w-2 bg-gray-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1 border-r border-b border-gray-600"></div>
            </div>
          </div>
        </a>
      </div>

      {/* <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-gray-500 transition duration-300"
      >
        View Resume
      </a> */}

      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-8 bg-gray-600 hover:bg-gray-700 p-3 rounded-full text-white shadow-sm transition duration-300"
          aria-label="Scroll to up"
        >
          <FaArrowUp size={20} />
        </button>

      )}
    </footer>
  );
};

export default Footer;