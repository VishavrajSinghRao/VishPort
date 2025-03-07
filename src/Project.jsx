import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Project = React.forwardRef((props, ref) => {
  const projects = [
    { title: "Real-Time Tracking", image: "/src/assets/images/real.webp", codeLink: "https://github.com/VishavrajSinghRao/REAL-TIME-TRACKING.git"/*, demoLink: ""*/ },
    { title: "NEXA", image: "/src/assets/images/nexa.webp", codeLink: "https://github.com/VishavrajSinghRao/NEXA.git", demoLink: "https://vishavrajsinghrao.github.io/NEXA/" },
    { title: "LeetMetric", image: "/src/assets/images/leetmetric.webp", codeLink: "https://github.com/VishavrajSinghRao/LeetMetric.git", demoLink: "https://vishavrajsinghrao.github.io/LeetMetric/" },
    { title: "Paste-App", image: "/src/assets/images/DALL·E 2025-03-06 23.41.58 - A modern, dark-themed Paste App interface. The design features a sleek text editor with syntax highlighting, a 'Paste' button, and a copy link option.webp", codeLink: "https://github.com/VishavrajSinghRao/PASTE-APP.git", demoLink: "#" },
    { title: "Portfolio", image: "/src/assets/images/vish.webp", codeLink: "#", demoLink: "#" },
    { title: "Chess-Game", image: "/src/assets/images/chess.webp", codeLink: "https://github.com/VishavrajSinghRao/CHESS-GAME.git", demoLink: "#" },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ x: "-100%", opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="text-white py-12 px-6 mt-80"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-400 mb-8">Check Out Some of My Work</p>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-15">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ x: "-100%", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group border bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-opacity-50 hover:border-cyan-400"
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-all duration-300"></div>

              {/* Code & Demo Links */}
              <div className="absolute bottom-0 w-full flex items-center justify-between p-4 bg-black/80 backdrop-blur-lg">
                <a
                  href={project.codeLink}
                  className="text-white flex items-center gap-2 hover:text-cyan-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💻</span> Code
                </a>
                <a
                  href={project.demoLink}
                  className="text-white flex items-center gap-2 hover:text-cyan-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🔗</span> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default Project;
