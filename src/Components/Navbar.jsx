import { useState, useEffect } from "react";
import { Wifi, Menu, X } from "lucide-react";

export default function Nav() {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const formatTime = (date) => date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  const formatDate = (date) => date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "2-digit" });

  return (
    <>
      <nav className="w-full p-4 fixed top-0 bg-gray-800 bg-opacity-10 backdrop-blur-lg shadow-lg z-50 text-white">
        <div className="container mx-auto flex justify-between items-center flex-wrap pt-2 pb-2">
          <div className="w-full md:w-auto flex justify-between items-center mb-2 md:mb-0">
            <div className="flex items-center gap-4">
              <Wifi size={22} />
              <span>{formatTime(time)}</span>
              <span>{formatDate(time)}</span>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
            
          <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-4 md:mt-0 transition-all duration-300`}>
            <a href="#home" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#experience" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#skill" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}