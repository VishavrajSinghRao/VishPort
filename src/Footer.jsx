import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaMedium, FaPaperclip } from "react-icons/fa";


const Footer = React.forwardRef((props,ref) => {
  return (
    <footer className="mt-28 text-white py-8 lg:ml-58">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
      
      {/* Left Section - Name & About */}
      <div className="lg:w-1/3 mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold whitespace-nowrap">Vishavraj Singh Rao</h2>
        <p className="text-blue-400 text-lg">FullStack Developer</p>
        <p className="mt-3 text-gray-300">
          <br />
          Let's Connect With Me
        </p>
      </div>

      {/* Middle Section - Quick Links */}
      <div className="lg:w-1/3 mb-4 lg:mb-0">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <ul className="mt-3 space-y-2">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="flex items-center justify-center lg:justify-start space-x-2 text-blue-400">
              <span>➤</span> <a href="#" className="hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Contact Info */}
      <div className="lg:w-1/3">
        <h3 className="text-xl font-semibold">Contact info</h3>
        <div className="mt-2 space-y-2">
          <p className="flex items-center justify-center lg:justify-start space-x-2">
           <img src="/src/assets/images/email.png"className="h-5 w-5" />
            <span>rv931563@gmail.com</span>
          </p>
          <p className="flex items-center justify-center lg:justify-start space-x-2">
            <FaMapMarkerAlt className="text-green-500" />
            <span>Udaipur, Rajasthan, India</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start space-x-4 mt-4 text-gray-400">
          <a href="https://www.linkedin.com/in/vishavraj-singh-rao-405a26292/">
          <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </a>
        <a href="">
          <FaMedium className="hover:text-blue-400 cursor-pointer" />
        </a>
        <a href="https://github.com/VishavrajSinghRao" target="_blank">
        <FaGithub className="hover:text-blue-400 cursor-pointer" />
          
        </a>
        <a href="">
        <FaPaperclip className="hover:text-blue-400 cursor-pointer" />
        </a>
          
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-gray-400 mt-4 border-t border-gray-700  pt-4 text-center lg:mr-52">
      © 2024 - 2025 | All Rights Reserved
    </div>

    {/* Scroll to Top Button */}

  </footer>
  );
});

export default Footer
