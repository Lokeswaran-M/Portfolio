import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-3 px-4 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <motion.div 
          className="border-t border-gray-800 pt-3 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            © {currentYear} Lokeswaran M. All rights reserved.
          </p>
          {/* <div className="flex space-x-4">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

