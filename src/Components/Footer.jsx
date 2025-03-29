import { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);
  const resumeUrl = "https://drive.google.com/drive/folders/1sq9akoT3VSWGnAIO2BrfwGluVbvgonaJ?usp=sharing";

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
    <footer  className="text-gray-400 py-6 flex flex-col items-center justify-center pb-4 relative">
      <p className="text-sm">&copy; 2025 Muhammad Umair Arshad. All rights reserved.</p>

      <div className="flex gap-6 mt-6 text-white">
        <a
          href="https://wa.me/923347775040"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
          aria-label="Contact me on WhatsApp"
        >
          <FaWhatsapp size={25} />
        </a>
        <a
          href="https://github.com/umairarshad-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
          aria-label="View my GitHub profile"
        >
          <FaGithub size={25} />
        </a>
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
          href="mailto:umairarshad6697@gmail.com"
          className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
          aria-label="Send me an email"
        >
          <MdEmail size={25} />
        </a>
      </div>

      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-gray-500 transition duration-300"
      >
        View Resume
      </a>

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