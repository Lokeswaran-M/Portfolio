import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-1 text-base">
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href="#"
          className="text-white no-underline transition-colors duration-300 hover:text-pink-400"
        >
          Lokeswaran M
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
