import React, { useState } from "react";
import { motion } from "framer-motion";
import RockPaperScissors from "./RockPaperScissors";

const About = React.forwardRef((props, ref) => {
  const words = ["Hi,", "I'm", "Vishavraj", "Singh", "Rao"];

  return (
    <motion.div ref={ref} className="mt-44">
      <h1 className="text-4xl ml-24 mt-60 text-white font-bold lg:ml-24">About Me</h1>

      {/* Name Animation */}
      <div className="flex items-center justify-center mt-24 mr-20">
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
          className="flex"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.2,
                backgroundImage: "linear-gradient(to right, white, black)", // White to Black Gradient
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`text-white bg-clip-text text-5xl font-bold whitespace-nowrap lg:text-7xl sm:ml-4 ${
                index === 2 ? "ml-4 bg-gradient-to-r from-white to-gray-900 text-transparent" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bio Section */}
      <div className="flex items-center justify-center mt-20">
        <div className="h-80 w-[800px] text-3xl ml-12  bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent font-serif lg:w-[1000px]">
          Hello! I'm Vishavraj Singh, a passionate MERN Stack Developer based in India, dedicated to crafting dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in building seamless full-stack solutions that deliver exceptional user experiences.
        </div>
      </div>

      <RockPaperScissors />
    </motion.div>
  );
});

export default About;
