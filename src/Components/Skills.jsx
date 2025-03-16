import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaFigma, FaJs } from 'react-icons/fa';
import { RiTailwindCssFill, RiClaudeLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const Skills = () => {
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

  return (
    <div className="skills-container my-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Skill Highlights
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
          >
            <div 
              className="text-4xl sm:text-5xl mb-2"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-white text-sm md:text-base text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
