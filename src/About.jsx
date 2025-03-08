import React, { useState } from "react";
import { motion } from "framer-motion";
import RockPaperScissors from "./RockPaperScissors";

const About = React.forwardRef((props, ref) => {
  const words = ["Hi,", "I'm","Vishavraj", "Singh", "Rao"];

  return (
    <motion.div ref={ref} className="mt-24 sm:mt-44">
      <h1 className=" font-[Poppins] text-3xl sm:text-4xl md:ml-4 sm:ml-24 mt-20 sm:mt-60 lg:ml-[530px] text-white font-bold">
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
  whileTap={{ scale: 1.2, color: "#22D3EE" }} 
  whileFocus={{ scale: 1.2, color: "#22D3EE" }} 
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }} // Repeat Animation
  className={`text-white bg-clip-text text-3xl sm:text-5xl lg:text-7xl font-bold sm:ml-4 tracking-wide 
    animate-pulse ${index === 2 ? "ml-2 sm:ml-4 bg-gradient-to-r from-white to-gray-800 text-transparent block sm:inline" : ""} 
    ${index > 2 ? "block sm:inline" : ""} hover:scale-110 hover:text-gray-400 active:scale-110 focus:scale-110`}
>
  {word}
</motion.span>

))}


        </motion.div>
      </div>

      {/* Bio Section */}

      <div className="flex items-center justify-center mt-12 sm:mt-20">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }} // Slight Zoom-in on Hover
    className="h-auto w-full max-w-[800px] sm:max-w-[1000px] px-4 text-xl sm:text-3xl 
    bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent font-serif text-center"
  >
    A passionate MERN Stack Developer based in India, dedicated to crafting dynamic and responsive web applications.
    <br /><br />
    With a strong foundation in 
    <span className="text-white tracking-wide animate-pulse"> MongoDB, Express.js, React.js,</span> 
    and <span className="text-white tracking-wide animate-pulse">Node.js</span>, I specialize in 
    building seamless full-stack solutions that deliver exceptional user experiences.
  </motion.div>
</div>

<motion.div
  initial={{ y: 5 }}
  animate={{ y: -5 }}
  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
>
  <RockPaperScissors />
</motion.div>


    </motion.div>
  );
});

export default About;
