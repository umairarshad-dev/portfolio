import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma, FaJs } from 'react-icons/fa';
import { RiTailwindCssFill, RiClaudeLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  
  const skillsData = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind', icon: <RiTailwindCssFill />, color: '#06B6D4' },
    { name: 'GitHub', icon: <FaGithub />, color: 'white' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Redux', icon: <TbBrandRedux />, color: '#764ABC' },
    { name: 'Figma', icon: <FaFigma />, color: 'white' },
    { name: 'JavaScript', icon: <FaJs />, color: 'yellow' },
    { name: 'Claude AI', icon: <RiClaudeLine />, color: 'orange' },
  ];

  const animateItems = () => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    skillsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 150);  
    });
  };

   useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateItems();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

   useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.skill-item');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (containerTop < windowHeight && containerTop > -containerRef.current.offsetHeight) {
        const scrollProgress = (windowHeight - containerTop) / (windowHeight + containerRef.current.offsetHeight);
        
        elements.forEach((el, index) => {
           const offsetY = (index % 3 - 1) * scrollProgress * 15;
          const offsetX = ((index % 5) - 2) * scrollProgress * 8;
          const rotate = ((index % 4) - 2) * scrollProgress * 5;
          
          el.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  id="skill" ref={containerRef} className="skills-container my-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in">
        Skill Highlights
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`skill-item flex flex-col items-center justify-center p-4 transition-all duration-700 
                      hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-${skill.name.toLowerCase()}/20
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