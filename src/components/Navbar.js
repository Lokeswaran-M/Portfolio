import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center font-semibold py-3 px-8 bg-gray-900 text-white">
      <div className="text-xl font-medium font-[\'Homemade Apple\',cursive]">
        Lokeswaran
      </div>
      <ul className="flex list-none gap-4">
        <li>
          <a href="#about" className="text-white no-underline hover:text-purple-400 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white no-underline hover:text-purple-400 transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white no-underline hover:text-purple-400 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
