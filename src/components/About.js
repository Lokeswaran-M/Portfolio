import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const mainControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      textControls.start("visible");
    }
  }, [isInView, mainControls, textControls]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Split text into words for animation
  const description = "I'm a passionate Mobile App & Web Developer with expertise in React Native, React, JavaScript, and TypeScript. I love transforming ideas into high-performance mobile applications and scalable web solutions with seamless backend integration. I specialize in React Native, building feature-rich and intuitive mobile applications that deliver smooth and engaging user experiences, with expertise in API integration, state management, and backend connectivity. On the backend, I work with Node.js, Express.js, MySQL, and MongoDB to develop secure, efficient, and scalable server-side applications, leveraging Swagger and Thunder Client for API development and testing. In web development, I have a strong passion for creating responsive, visually appealing, and high-performing web solutions using React, HTML, CSS, Bootstrap, and TailwindCSS, focusing on fast, scalable, and user-friendly interfaces. I am dedicated to continuous learning, problem-solving, and staying updated with the latest technologies, with the goal of building innovative solutions that make an impact. Let's connect and create something amazing together!";

  const words = description.split(" ");

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 px-4 md:px-8 text-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 relative inline-block"
        >
          <span className="relative z-10">About Me</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-400 transform -rotate-2 -z-1"></span>
        </motion.h2>
        
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate={textControls}
          className="text-base md:text-lg text-gray-800 leading-relaxed text-left bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white"
        >
{words.map((word, index) => (
  <motion.span
    key={index}
    variants={wordVariants}
    className="inline-block mr-1"
  >
    {word === "React" || word === "Native," || word === "React," ? (
      <strong className="font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{word}</strong>
    ) : word === "Node.js," || word === "Express.js," ? (
      <strong className="font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">{word}</strong>
    ) : word === "JavaScript," || word === "TypeScript." ? (
      <strong className="font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">{word}</strong>
    ) : word === "MongoDB" || word === "MySQL," ? (
      <strong className="font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{word}</strong>
    ) : word === "HTML," || word === "CSS," ? (
      <strong className="font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">{word}</strong>
    ) : word === "Bootstrap," || word === "TailwindCSS," ? (
      <strong className="font-semibold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">{word}</strong>
    ) : (
      word
    )}
  </motion.span>
))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full shadow-md cursor-pointer"
          >
            Download Resume
          </motion.div>
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToContact}
      className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-50"
    >
      Contact Me
    </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="bg-pink-100/45 py-10 px-8 text-center"
//     >
//       <h2 className="text-2xl font-semibold mb-12 hover:text-pink-400 transition-colors duration-300">
//         About Me
//       </h2>
//       <p className="text-base text-black leading-relaxed font-light max-w-4xl mx-auto">
//         I’m a passionate <strong className="font-semibold">Mobile App & Web Developer</strong> with expertise in <strong className="font-semibold">React Native, React, JavaScript, and TypeScript</strong>. 
//         I love transforming ideas into high-performance mobile applications and scalable web solutions with seamless backend integration. 
//         I specialize in <strong className="font-semibold">React Native</strong>, building feature-rich and intuitive mobile applications that deliver smooth and engaging user experiences, with expertise in API integration, state management, and backend connectivity. 
//         On the backend, I work with <strong className="font-semibold">Node.js, Express.js, MySQL, and MongoDB</strong> to develop secure, efficient, and scalable server-side applications, leveraging <strong className="font-semibold">Swagger</strong> and <strong className="font-semibold">Thunder Client</strong> for API development and testing. 
//         In web development, I have a strong passion for creating responsive, visually appealing, and high-performing web solutions using <strong className="font-semibold">React, HTML, CSS, Bootstrap, and TailwindCSS</strong>, focusing on fast, scalable, and user-friendly interfaces. 
//         I am dedicated to continuous learning, problem-solving, and staying updated with the latest technologies, with the goal of building innovative solutions that make an impact. Let's connect and create something amazing together!
//       </p>
//     </section>
//   );
// };

// export default About;
