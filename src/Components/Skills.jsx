import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaJs, FaBootstrap, FaSass } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript, SiNextdotjs, SiRemix, SiPostman, SiFigma, SiVercel } from 'react-icons/si';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const skillsData = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Sass', icon: <FaSass />, color: '#CD6799' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: '#06B6D4' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Remix', icon: <SiRemix />, color: 'white' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'white' },
    { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
    { name: 'Figma', icon: <SiFigma />, color: '#ffffff' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
  ];

  const animateItems = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    skillsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 100);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animateItems();
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skill" ref={containerRef} className="p-20 bg-[#0f172a] max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white animate-fade-in pb-8">
        Skill Highlights
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`skill-item flex flex-col items-center justify-center p-4 transition-all duration-700 w-full
                        hover:scale-110 hover:rotate-3 hover:shadow-lg
                        ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div
              className="text-4xl sm:text-5xl mb-2 transition-all duration-500 hover:rotate-12"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-white text-sm md:text-base text-center relative overflow-hidden group">
              {skill.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
