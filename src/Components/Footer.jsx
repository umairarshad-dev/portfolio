import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
   const resumeUrl = "file:///C:/Users/user/Downloads/Muhammad%20Umair%20Arshad%20(1).pdf";

  return (
    <footer className="text-gray-400 py-6 flex flex-col items-center justify-center">
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
          href="https://github.com/UmairArshad08"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-gray-400 transition duration-300"
          aria-label="View my GitHub profile"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-umair-arshad-ab7b34312/"
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
    </footer>
  );
};

export default Footer;