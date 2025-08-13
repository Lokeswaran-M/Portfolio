import React from "react";
import profileImage from "../assets/My Pic.png";

const Hero = () => {
  return (
    <div className="relative flex min-h-[80vh] w-full overflow-hidden bg-white">
      {/* Left Side - Designer */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#fff6f0] p-8 text-gray-800 md:p-12">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="text-5xl font-bold">
            Frontend<span className="text-red-600"> ❤</span>
          </h1>
  <p className="text-lg leading-relaxed">
    Experienced Frontend Developer specializing in React, React Native,
    and modern JavaScript frameworks to build responsive and interactive user interfaces.
  </p>
        </div>
      </div>

      {/* Center Image */}
      {/* Center Image at bottom */}
      <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[100vw] max-w-4xl pr-9">
        <img
          src={profileImage}
          alt="Profile"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Right Side - Coder */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#f0f8ff] p-8 text-gray-800 md:p-12">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="font-mono text-5xl font-bold">&lt;Backend&gt;</h1>
     <p className="text-lg leading-relaxed">
    Skilled Backend Developer working with Node.js, Express.js, and databases
    like MySQL and MongoDB to create secure, scalable server-side applications.
  </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
