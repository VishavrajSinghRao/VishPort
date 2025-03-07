import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white p-4 ">
      <div className="container mx-auto flex justify-end items-center">
        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6 gap-10 font-bold text-gray-400">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-6 text-lg">
          <li><a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Skills</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
