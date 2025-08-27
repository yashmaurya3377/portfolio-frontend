
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'React Native', icon: <FaReact className="text-blue-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-800" /> },
    { name: 'Context API', icon: <FaReact className="text-blue-400" /> },
     { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto  pb-25">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-white/20 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform"
          >
            <span className="text-3xl mb-2">{skill.icon}</span>
            <h3 className="text-lg font-medium text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;