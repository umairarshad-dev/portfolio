import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs.",
      tags: [ ],
      icon: (
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
          <span className="text-blue-500 text-3xl font-bold">&lt;/&gt;</span>
        </div>
      )
    },
    {
      id: 2,
      title: "Web Design",
      description: "Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity and drive growth.",
      tags: [ ],
      icon: (
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.93-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19H5v-1.92l8.06-8.06 1.92 1.92L6.92 19z" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "Responsive Web Design",
      description: "Responsive web design services to ensure seamless user experiences across all devices. Mobile, tablet, and desktop-friendly designs that adapt to any screen size.",
      tags: [ ],
      icon: (
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <div id="services" className="flex flex-col items-center bg-gray-800 text-white px-4 py-12">
      <h3 className="text-4xl font-bold mb-4 text-center">Services</h3>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
        Explore our professional web solutions designed to help you succeed in the digital world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-full relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
                <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="mt-2 text-gray-300 mb-4 text-center">{service.description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;