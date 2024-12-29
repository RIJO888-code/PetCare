import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-black text-white font-poppins">
      <motion.div
        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Company Logo" className="w-10 h-10" />
          <h1 id="home" className="text-lg font-bold text-yellow-500">
            Happy Paws
          </h1>
        </div>

    
        <button
          className="md:hidden text-yellow-500 focus:outline-none z-20"
          onClick={handleToggleMenu}
        >
          ☰
        </button>

    
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static bg-black md:bg-transparent w-full md:w-auto top-full left-0 md:left-auto transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:transform-none transition-transform duration-300 md:space-y-0 space-y-2 text-center md:text-left`}
        >
          {["Home", "About", "Services", "Contact", "Book Appointment"].map(
            (link, index) => (
              <motion.li
                key={index}
                className="text-yellow-500 hover:text-yellow-300 transition duration-200"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                <a href={`#${link.toLowerCase().replace(" ", "")}`}>
                  {link}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
