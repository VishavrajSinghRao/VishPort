import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaFilePdf, FaGithub, FaEnvelope } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
import About from './About';
import Project from './Project';
import SkillCard from './SkillCard';
import Form from './Form';
import Footer from './Footer';


const Home = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const FormRef = useRef(null);
  const FooterRef = useRef(null);

  const slowScrollTo = (target, duration = 700) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scroll = () => {
    if (aboutRef.current) slowScrollTo(aboutRef.current, 500);
  };

  return (
    <div>
      
      {/* Portfolio Title with Animation */}
      <motion.h1
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold bg-gradient-to-r from-white to-black text-7xl bg-clip-text drop-shadow-[0_0_0.5px_white] -mt-12"
      >
       VishPort
      </motion.h1>

      {/* Main Section */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:flex lg:flex-row-reverse items-center justify-center lg:-mt-15 -mt-15 "
      >
        {/* Logo Circle */}
        <div className="flex justify-center items-center mt-45 lg:mt-55 group relative">
  {/* Default Image (Before Hover) */}
  <img 
    className="w-90 h-90 border rounded-full transition-transform duration-500 transform group-hover:rotate-y-180 opacity-100 group-hover:opacity-0"  
    src="/src/assets/logo.webp" 
    alt="Logo"
  />

  {/* Second Image (After Hover) */}
  <img 
    className="w-90 h-90 border rounded-full transition-all duration-500 transform rotate-y-180 opacity-0 group-hover:opacity-100 absolute"  
    src="/src/assets/logo.jpg" 
    alt="Logo Hover"
  />
</div>



        {/* Text Section */}
        <div className="flex flex-col items-center mt-15">
          <span className="text-transparent text-7xl font-bold pr-25 lg:mt-13 lg:mr-24 bg-gradient-to-r from-white to-black bg-clip-text">
            Hi There,
          </span>
          <span className="text-transparent bg-gradient-to-r from-white to-gray-900 bg-clip-text font-bold text-7xl pl-9 whitespace-nowrap lg:mr-25">
            I'm Vishavraj
          </span>

          <span className="text-4xl mt-10 bg-gradient-to-r from-white to-gray-900 text-transparent bg-clip-text whitespace-nowrap lg:ml-5 ml-30">
  {Array.from("I am into Full Stack Development").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0.5 }}
      animate={{ color: ["#FFFFFF", "#000000", "#FFFFFF"] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      whileHover={{
        scale: 2,
        color: "#22D3EE",
       
        textShadow: "0px 0px 10px rgba(34, 211, 238, 0.8)",
        rotate: [0, 5, -5, 0], 
      }}
    >
      {char}
    </motion.span>
  ))}
</span>
        </div>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4}}
        className="flex justify-center items-center gap-10 mt-15 mr-20 lg:-mt-14 lg:mr-125"
      >
        <a href="https://github.com/VishavrajSinghRao" target="_blank">
          <FaGithub className="text-3xl text-white" />
        </a>
        <a href="mailto:rv931563@gm">
          <img src="/src/assets/email.png"className="h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/vishavraj-singh-rao-405a26292/" target="_blank">
        <img src="/src/assets/linkedin-94.png" className="h-8 w-8" />
        </a>
        <a href="https://x.com/__03_vishal__" target="_blank">
          <img src="/src/assets/twt.png" className="h-8 w-8 filter invert hue-rotate-180" />
        </a>
        <a href="/src/assets/RESUME VISH.pdf" target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/resume.png" className="h-8 w-8" />
        </a>
      </motion.div>

      {/* About Section Button */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex justify-center items-center mt-15 mr-49 lg:mr-155 lg:mt-12"
      >
        <button
          onClick={scroll}
          className="px-12 py-3 bg-gradient-to-r from-gray-200 to-black text-2xl rounded-2xl h-16"
        >
          About me
        </button>
      </motion.div>

      {/* Sections with Animation */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <SkillCard ref={skillsRef} />
        <Form ref={FormRef} />
        <Footer ref={FooterRef} />
      </motion.div>
    </div>
  );
};

export default Home;
