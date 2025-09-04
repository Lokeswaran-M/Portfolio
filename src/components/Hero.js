import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [activeSide, setActiveSide] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const frontendSkills = ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs", "Swagger"];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500 rounded-full opacity-5"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-500 rounded-full opacity-5"
          animate={{ 
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-5"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center relative z-10">
        {/* Name Header */}
        <motion.div 
          className="text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Lokeswaran
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-600 mt-4">Full Stack Developer</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
          {/* Left Side - Frontend Developer */}
          <motion.div
            className="frontend flex-1 flex flex-col items-center lg:items-end justify-center text-center lg:text-right p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg w-full"
            onHoverStart={() => setActiveSide('frontend')}
            onHoverEnd={() => setActiveSide(null)}
            onClick={() => isMobile && setActiveSide(activeSide === 'frontend' ? null : 'frontend')}
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: activeSide && activeSide !== 'frontend' ? 0.7 : 1,
              x: 0,
              scale: activeSide === 'frontend' ? 1.02 : 1
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-full max-w-md space-y-4 md:space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Frontend<span className="text-red-500"> Developer</span>
              </motion.h2>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I create responsive and interactive user interfaces using modern technologies like React, React Native, and JavaScript frameworks.
              </motion.p>
              
              <motion.div 
                className="mt-4 md:mt-6 flex flex-wrap justify-center lg:justify-end gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {frontendSkills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.button 
                className="mt-6 md:mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                View Frontend Projects
              </motion.button>
            </div>
          </motion.div>

          {/* Center Divider/Icon */}
          <motion.div 
            className="hidden lg:flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
            <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
          </motion.div>

          {/* Right Side - Backend Developer */}
          <motion.div
            className="backend flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg w-full"
            onHoverStart={() => setActiveSide('backend')}
            onHoverEnd={() => setActiveSide(null)}
            onClick={() => isMobile && setActiveSide(activeSide === 'backend' ? null : 'backend')}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: activeSide && activeSide !== 'backend' ? 0.7 : 1,
              x: 0,
              scale: activeSide === 'backend' ? 1.02 : 1
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-full max-w-md space-y-4 md:space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Backend<span className="text-blue-500"> Developer</span>
              </motion.h2>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I build secure, scalable server-side applications and APIs using Node.js, Express, and modern database technologies.
              </motion.p>
              
              <motion.div 
                className="mt-4 md:mt-6 flex flex-wrap justify-center lg:justify-start gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {backendSkills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.button 
                className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Explore Backend Projects
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="mt-8 md:mt-0 absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-700 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs md:text-sm mb-2">Scroll down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// const HomePage = () => {
//   const [activeSide, setActiveSide] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const frontendSkills = ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "TailwindCSS"];
//   const backendSkills = ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs", "Swagger"];

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <motion.div 
//           className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500 rounded-full opacity-5"
//           animate={{ 
//             x: [0, 10, 0],
//             y: [0, -15, 0],
//           }}
//           transition={{ 
//             repeat: Infinity,
//             duration: 20,
//             ease: "easeInOut"
//           }}
//         ></motion.div>
//         <motion.div 
//           className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-500 rounded-full opacity-5"
//           animate={{ 
//             x: [0, -15, 0],
//             y: [0, 10, 0],
//           }}
//           transition={{ 
//             repeat: Infinity,
//             duration: 25,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         ></motion.div>
//         <motion.div 
//           className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-5"
//           animate={{ 
//             x: [0, 15, 0],
//             y: [0, -10, 0],
//           }}
//           transition={{ 
//             repeat: Infinity,
//             duration: 18,
//             ease: "easeInOut",
//             delay: 2
//           }}
//         ></motion.div>
//       </div>

//       <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative z-10">
//         {/* Name Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
//             Lokeswaran
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
//           <p className="text-xl text-gray-600 mt-4">Full Stack Developer</p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
//           {/* Left Side - Frontend Developer */}
//           <motion.div
//             className="frontend flex-1 flex flex-col items-center lg:items-end justify-center text-center lg:text-right p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg"
//             onHoverStart={() => setActiveSide('frontend')}
//             onHoverEnd={() => setActiveSide(null)}
//             onClick={() => isMobile && setActiveSide(activeSide === 'frontend' ? null : 'frontend')}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ 
//               opacity: activeSide && activeSide !== 'frontend' ? 0.7 : 1,
//               x: 0,
//               scale: activeSide === 'frontend' ? 1.02 : 1
//             }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ y: -5 }}
//           >
//             <div className="w-full max-w-md space-y-6">
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Frontend<span className="text-red-500"> Developer</span>
//               </motion.h2>
              
//               <motion.p 
//                 className="text-lg text-gray-600 leading-relaxed"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 I create responsive and interactive user interfaces using modern technologies like React, React Native, and JavaScript frameworks.
//               </motion.p>
              
//               <motion.div 
//                 className="mt-6 flex flex-wrap justify-center lg:justify-end gap-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {frontendSkills.map((skill, index) => (
//                   <motion.span 
//                     key={index}
//                     className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </motion.div>
              
//               <motion.button 
//                 className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 View Frontend Projects
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Center Divider/Icon */}
//           <motion.div 
//             className="hidden lg:flex flex-col items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
//             <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100">
//               <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//               </svg>
//             </div>
//             <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
//           </motion.div>

//           {/* Right Side - Backend Developer */}
//           <motion.div
//             className="backend flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg"
//             onHoverStart={() => setActiveSide('backend')}
//             onHoverEnd={() => setActiveSide(null)}
//             onClick={() => isMobile && setActiveSide(activeSide === 'backend' ? null : 'backend')}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ 
//               opacity: activeSide && activeSide !== 'backend' ? 0.7 : 1,
//               x: 0,
//               scale: activeSide === 'backend' ? 1.02 : 1
//             }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ y: -5 }}
//           >
//             <div className="w-full max-w-md space-y-6">
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold text-gray-800"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Backend<span className="text-blue-500"> Developer</span>
//               </motion.h2>
              
//               <motion.p 
//                 className="text-lg text-gray-600 leading-relaxed"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 I build secure, scalable server-side applications and APIs using Node.js, Express, and modern database technologies.
//               </motion.p>
              
//               <motion.div 
//                 className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {backendSkills.map((skill, index) => (
//                   <motion.span 
//                     key={index}
//                     className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </motion.div>
              
//               <motion.button 
//                 className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 Explore Backend Projects
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div 
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-700 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <span className="text-sm mb-2">Scroll down</span>
//           <motion.div 
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };


// export default HomePage;











// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // This would be imported from your assets
// // import profileImage from "../assets/My Pic1.png";

// // For demonstration, using a placeholder
// const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

// const Hero = () => {
//   const [activeSide, setActiveSide] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const frontendSkills = ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "TailwindCSS"];
//   const backendSkills = ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs", "Swagger"];

//   return (
//     <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500 rounded-full opacity-5"></div>
//         <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-500 rounded-full opacity-5"></div>
//         <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-5"></div>
//       </div>

//       <div className="flex flex-1 relative z-10">
//         {/* Left Side - Frontend Developer */}
//         <motion.div
//           className="frontend flex flex-1 flex-col items-center justify-center p-8 md:p-12 relative"
//           onHoverStart={() => setActiveSide('frontend')}
//           onHoverEnd={() => setActiveSide(null)}
//           onClick={() => isMobile && setActiveSide(activeSide === 'frontend' ? null : 'frontend')}
//           initial={{ opacity: 1 }}
//           animate={{ 
//             opacity: activeSide && activeSide !== 'frontend' ? 0.2 : 1,
//             scale: activeSide === 'frontend' ? 1.02 : 1
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-70"></div>
//           <div className="relative z-10 w-full max-w-md space-y-6 text-center">
//             <motion.h1 
//               className="text-4xl md:text-5xl font-bold text-gray-800"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               Frontend<span className="text-red-500"> Developer</span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-lg text-gray-600 leading-relaxed"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               I create responsive and interactive user interfaces using modern technologies like React, React Native, and JavaScript frameworks.
//             </motion.p>
            
//             <motion.div 
//               className="mt-6 flex flex-wrap justify-center gap-2"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               {frontendSkills.map((skill, index) => (
//                 <span 
//                   key={index}
//                   className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </motion.div>
            
//             <motion.button 
//               className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               View Frontend Projects
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Center Profile Image */}
//         <motion.div 
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 z-20"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           <div className="relative w-full h-full">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-blue-400 rounded-full blur-lg opacity-30"></div>
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
//             />
//           </div>
          
//           <motion.div 
//             className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md whitespace-nowrap"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
//               Lokeswaran
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* Right Side - Backend Developer */}
//         <motion.div
//           className="backend flex flex-1 flex-col items-center justify-center p-8 md:p-12 relative"
//           onHoverStart={() => setActiveSide('backend')}
//           onHoverEnd={() => setActiveSide(null)}
//           onClick={() => isMobile && setActiveSide(activeSide === 'backend' ? null : 'backend')}
//           initial={{ opacity: 1 }}
//           animate={{ 
//             opacity: activeSide && activeSide !== 'backend' ? 0.2 : 1,
//             scale: activeSide === 'backend' ? 1.02 : 1
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-l from-blue-50 to-indigo-50 opacity-70"></div>
//           <div className="relative z-10 w-full max-w-md text-center">
//             <motion.h1 
//               className="text-4xl md:text-5xl font-bold text-gray-800"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               Backend<span className="text-blue-500"> Developer</span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-lg text-gray-600 leading-relaxed mt-4"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               I build secure, scalable server-side applications and APIs using Node.js, Express, and modern database technologies.
//             </motion.p>
            
//             <motion.div 
//               className="mt-6 flex flex-wrap justify-center gap-2"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               {backendSkills.map((skill, index) => (
//                 <span 
//                   key={index}
//                   className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </motion.div>
            
//             <motion.button 
//               className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               Explore Backend Projects
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div 
//         className="absolute bottom-28  left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-900 zindex-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         <span className="text-sm mb-2 ">Scroll down</span>
//         <motion.div 
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;









// import React from "react";
// import profileImage from "../assets/My Pic1.png";

// const Hero = () => {
//   return (
//     <div className="group relative flex min-h-[85vh] w-full overflow-hidden bg-white">
//       <div className="flex flex-1 relative">

//         {/* Left Side - Designer */}
//         <div
//           className="frontend flex flex-1 flex-col items-center justify-center
//           bg-[#fff6f0]/80 backdrop-blur-md shadow-lg p-8 text-gray-800 md:p-12 
//           relative z-10 transition-all duration-300
//           group-hover:opacity-10 hover:!opacity-100"
//         >
//           <div className="w-full max-w-md space-y-6 text-center">
//             <h1 className="text-5xl font-bold">
//               Frontend<span className="text-red-600"> ❤</span>
//             </h1>
//             <p className="text-lg leading-relaxed">
//               Experienced Frontend Developer specializing in React, React Native,
//               and modern JavaScript frameworks to build responsive and interactive user interfaces.
//             </p>
//                         <div className="mt-6 flex justify-center">
//               <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
//                 React • React Native • JavaScript • HTML/CSS
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Center Image */}
//         <div
//           className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] max-w-4xl pr-12 z-0
//                      pointer-events-none transition-opacity duration-300 
//                      group-hover:opacity-100 
//                      frontend:hover:!opacity-80 
//                      backend:hover:!opacity-80"
//         >
//           <img
//             src={profileImage}
//             alt="Profile"
//             className="h-full w-full object-contain"
//             loading="lazy"
//           />
//         </div>

//         {/* Right Side - Coder */}
//         <div
//           className="backend flex flex-1 flex-col items-center justify-center
//           bg-[linear-gradient(to_right,#f0f8ff0d,#f0f8ffcc,#dbefff)]
//           backdrop-blur-md shadow-lg p-8 text-gray-800 md:p-12 
//           relative z-10  transition-all duration-300
//           group-hover:opacity-10 hover:!opacity-100"
//         >
//           <div className="w-full max-w-md text-center flex items-center justify-center opacity-85 z-0">
//             <div>
//               <h1 className="text-5xl font-bold">&lt;Backend&gt;</h1>
//               <p className="text-lg leading-relaxed">
//                 Skilled Backend Developer working with Node.js, Express.js, and databases
//                 like MySQL and MongoDB to create secure, scalable server-side applications.
//               </p>
//                           <div className="mt-6 flex justify-center">
//               <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
//                 Node.js • Express • MySQL • MongoDB
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from "react";
// import profileImage from "../assets/My Pic1.png";

// const Hero = () => {
//   return (
//     <div className="relative flex min-h-[85vh] w-full overflow-hidden bg-white">


// {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
//   {[
//     `
// <div>Hello World</div>
// <p>Frontend Rocks!</p>`,

//     `
// body { margin:0; }
// h1 { color:red; }`,

//     `
// const sum = (a,b) => a+b;
// console.log(sum(2,3));`,

//     `
// function App(){
//   return <h1>Hi!</h1>;
// }`,

//     `
// const http = require("http");
// http.createServer((req,res)=>res.end("Hi")).listen(3000);`
//   ].map((snippet, i) => {
//     const randomTop = Math.random() * 100;   // anywhere vertically
//     const randomLeft = Math.random() * 50;   // limit to left half (0%–50%)
//     const randomRotate = Math.random() * 30 - 15;

//     return (
//       <pre
//         key={i}
//         style={{
//           position: "absolute",
//           top: `${randomTop}%`,
//           left: `${randomLeft}%`,
//           transform: `rotate(${randomRotate}deg)`,
//           fontSize: `2.5rem`,
//           fontWeight: "bold",
//           color: "rgba(0,0,0,0.1)",
//           fontFamily: "monospace",
//           whiteSpace: "pre",
//           lineHeight: "1.2",
//         }}
//       >
//         {snippet}
//       </pre>
//     );
//   })}
// </div> */}



//       {/* Left Side - Designer */}
//       <div className="flex flex-1 flex-col items-center justify-center bg-[#fff6f0]/80 p-8 text-gray-800 md:p-12 relative z-10">
//         <div className="w-full max-w-md space-y-6 text-center">
//           <h1 className="text-5xl font-bold">
//             Frontend<span className="text-red-600"> ❤</span>
//           </h1>
//           <p className="text-lg leading-relaxed">
//             Experienced Frontend Developer specializing in React, React Native,
//             and modern JavaScript frameworks to build responsive and interactive user interfaces.
//           </p>
//         </div>
//       </div>

//       {/* Center Image */}
//       <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[100vw] max-w-4xl pr-12">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="h-full w-full object-contain"
//           loading="lazy"
//         />
//       </div>

//       {/* Right Side - Coder */}
// <div className="flex flex-1 flex-col items-center justify-center
//   bg-[linear-gradient(to_right,#f0f8ff0d,#f0f8ffcc,#dbefff)]
//   backdrop-blur-md border border-white/30 shadow-lg
//   p-8 text-gray-800 md:p-12 relative z-10 rounded-2xl">
// <div className="w-full max-w-md text-center  flex items-center justify-center opacity-85 z-0">
//   <div>
//     <h1 className="text-5xl font-bold">&lt;Backend&gt;</h1>
//     <p className="text-lg leading-relaxed">
//       Skilled Backend Developer working with Node.js, Express.js, and databases
//       like MySQL and MongoDB to create secure, scalable server-side applications.
//     </p>
//   </div>
// </div>


//   {/* Your normal foreground content */}
//   <div className="relative z-10">
//     {/* Foreground elements go here */}
//   </div>
// </div>
//     </div>
//   );
// };

// export default Hero;
























// import React from "react";
// import profileImage from "../assets/My Pic1.png";

// const Hero = () => {
//   return (
//     <div className="relative flex min-h-[85vh] w-full overflow-hidden bg-white">
//       {/* Left Side - Designer */}
//       <div className="flex flex-1 flex-col items-center justify-center bg-[#fff6f0] p-8 text-gray-800 md:p-12">
//         <div className="w-full max-w-md space-y-6 text-center">
//           <h1 className="text-5xl font-bold">
//             Frontend<span className="text-red-600"> ❤</span>
//           </h1>
//   <p className="text-lg leading-relaxed">
//     Experienced Frontend Developer specializing in React, React Native,
//     and modern JavaScript frameworks to build responsive and interactive user interfaces.
//   </p>
//         </div>
//       </div>

//       {/* Center Image */}
//       {/* Center Image at bottom */}
//       <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[100vw] max-w-4xl pr-9">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="h-full w-full object-contain"
//           loading="lazy"
//         />
//       </div>

//       {/* Right Side - Coder */}
//       <div className="flex flex-1 flex-col items-center justify-center bg-[#f0f8ff] p-8 text-gray-800 md:p-12">
//         <div className="w-full max-w-md space-y-6 text-center">
//           <h1 className="text-5xl font-bold">&lt;Backend&gt;</h1>
//      <p className="text-lg leading-relaxed">
//     Skilled Backend Developer working with Node.js, Express.js, and databases
//     like MySQL and MongoDB to create secure, scalable server-side applications.
//   </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
