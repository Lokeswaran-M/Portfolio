import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 py-3 px-4 md:px-8 flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-gray-900/70 backdrop-blur-lg'
      }`}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-xl font-medium text-white flex items-center"
        style={{ fontFamily: '"Homemade Apple", cursive' }}
      >
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Lokeswaran
        </span>
        <motion.span 
          className="ml-2 w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none gap-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <motion.a
              href={item.href}
              className={`relative text-white no-underline py-2 px-1 group ${
                activeSection === item.href.substring(1) ? 'text-purple-300' : ''
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              {activeSection === item.href.substring(1) && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  layoutId="activeSection"
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Resume Button for Desktop */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-900/95 backdrop-blur-xl z-40"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <div className="text-xl font-medium text-white" style={{ fontFamily: '"Homemade Apple", cursive' }}>
                Lokeswaran
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <ul className="flex flex-col list-none p-4 mt-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`block text-white no-underline py-4 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${
                      activeSection === item.href.substring(1) ? 'bg-gray-800 text-purple-300' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-center font-medium"
                >
                  <span>Download Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center font-semibold py-3 px-8 bg-gray-900 text-white">
//       <div
//         className="text-xl font-medium"
//         style={{ fontFamily: '"Homemade Apple", cursive' }}
//       >
//         {" "}
//         Lokeswaran
//       </div>
//       <ul className="flex list-none gap-4">
//         <li>
//           <a
//             href="#about"
//             className="text-white no-underline hover:text-purple-400 transition-colors duration-300"
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#projects"
//             className="text-white no-underline hover:text-purple-400 transition-colors duration-300"
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             className="text-white no-underline hover:text-purple-400 transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
