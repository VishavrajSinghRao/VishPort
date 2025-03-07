import React, { useState } from "react";
import { motion } from "framer-motion";
import RockPaperScissors from "./RockPaperScissors";

const About = React.forwardRef((props, ref) => {
  const words = ["Hi,", "I'm","Vishavraj", "Singh", "Rao"];

  return (
    <motion.div ref={ref} className="mt-24 sm:mt-44">
      <h1 className="text-3xl sm:text-4xl md:ml-4 sm:ml-24 mt-20 sm:mt-60 lg:ml-[530px] text-white font-bold">
        About Me
      </h1>

      {/* Name Animation */}
      <div className="flex items-center justify-center mt-12 sm:mt-24 mr-4 sm:mr-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              },
            },
          }}
          className="flex flex-wrap justify-center"
        >
         {words.map((word, index) => (
  <motion.span
    key={index}
    initial={{ opacity: 0, y: -10, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{
      scale: 1.2,
      backgroundImage: "linear-gradient(to right, white, black)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
    }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`text-white bg-clip-text text-3xl sm:text-5xl lg:text-7xl font-bold sm:ml-4 ${
      index === 2 ? "ml-2 sm:ml-4 bg-gradient-to-r from-white to-gray-800 text-transparent block sm:inline" : ""
    } ${index > 2 ? "block" : ""} group-hover:scale-110 group-hover:text-cyan-400`} 
  >
    {word}
  </motion.span>
))}

        </motion.div>
      </div>

      {/* Bio Section */}
      <div className="flex items-center justify-center mt-12 sm:mt-20">
        <div className="h-auto w-full max-w-[800px] sm:max-w-[1000px] px-4 text-xl sm:text-3xl bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent font-serif">
          A passionate MERN Stack Developer based in India, dedicated to crafting dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in building seamless full-stack solutions that deliver exceptional user experiences.
        </div>
      </div>

      <RockPaperScissors />
    </motion.div>
  );
});

export default About;
