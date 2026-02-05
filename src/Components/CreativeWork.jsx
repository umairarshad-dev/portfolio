import React, { useEffect, useState, useRef } from "react";
import { FaCode, FaPalette, FaMagic, FaLaptop } from "react-icons/fa";

const CreativeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) {
          setIsVisible(true);
           observer.unobserve(entry.target);
        }
      },
      {
         threshold: 0.2,
         rootMargin: '0px 0px -50px 0px'
      }
    );
    
     if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
     return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Interactive UI",
      description: "Crafting dynamic user interfaces with smooth transitions and engaging user interactions.",
      icon: <FaCode size={22} />,
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      animation: "transition-all duration-700 transform translate-x-0 opacity-100",
      initial: "-translate-x-full opacity-0",  
    },
    {
      title: "Creative Design",
      description: "Applying modern design principles to deliver visually striking and user-friendly layouts.",
      icon: <FaPalette size={22} />,
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      animation: "transition-all duration-700 transform translate-x-0 opacity-100",
      initial: "translate-x-full opacity-0",  
    },
    {
      title: "Animations",
      description: "Enhancing user experience with meaningful animations, micro-interactions, and motion effects.",
      icon: <FaMagic size={22} />,
      color: "bg-green-500",
      borderColor: "border-green-500",
      animation: "transition-all duration-700 transform translate-y-0 opacity-100",
      initial: "-translate-y-full opacity-0", 
    },
    {
      title: "Responsive",
      description: "Developing fully responsive interfaces that perform flawlessly across desktops, tablets, and mobile devices.",
      icon: <FaLaptop size={22} />,
      color: "bg-yellow-500",
      borderColor: "border-yellow-500",
      animation: "transition-all duration-700 transform translate-y-0 opacity-100",
      initial: "translate-y-full opacity-0", 
    },
  ];

  return (
    <section 
    id="creative-work"
      ref={sectionRef}
      className="relative bg-[#0f172a] text-white py-16 px-4 sm:px-6 text-center min-h-screen overflow-hidden border-b-4 border-[#2d3748]"
    >
       <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.9 + 0.1,
              animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

    
      <div className="absolute right-4 sm:right-16 top-16 w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full opacity-90 hidden md:block"></div>

       <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
        
        @keyframes dance {
          0% { transform: translateY(0px); }
          25% { transform: translateY(-3px); }
          50% { transform: translateY(0px); }
          75% { transform: translateY(3px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-dance {
          animation: dance 4s ease-in-out infinite;
        }
      `}</style>

       <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#1e293b" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path fill="#283548" fillOpacity="0.8" d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,213.3C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Creative Work</h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-base sm:text-lg">
          Bringing ideas to life through innovative design and seamless interactions
        </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-12 sm:mt-16 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 text-left mb-4 ${isVisible ? service.animation : service.initial}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className={`${service.color} p-3 rounded-lg text-white flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 animate-dance`}>
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-semibold pb-2 sm:pb-3">{service.title}</h3>
                <p className="text-gray-300 mt-1 text-base sm:text-xl">{service.description}</p>
                <div className={`mt-3 sm:mt-4 w-full h-0.5 ${service.borderColor}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;