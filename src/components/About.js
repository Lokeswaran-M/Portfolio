import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const mainControls = useAnimation();
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Lokeswaran-M.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

const bioHighlights = [
  "I'm a passionate Mobile App & Web Developer with expertise in React Native, React, JavaScript, and TypeScript.",

  "I love transforming ideas into high-performance mobile applications and scalable web solutions with seamless backend integration.",

  "Specialized in React Native development, building feature-rich and intuitive mobile applications with smooth user experiences, API integration, state management, and backend connectivity.",

  "Experienced in backend development using Node.js, Express.js, MySQL, and MongoDB to create secure, efficient, and scalable server-side applications.",

  "Skilled in API development and testing using Swagger and Thunder Client for reliable and optimized integrations.",

  "Passionate about crafting responsive, visually appealing, and high-performing web applications using React, HTML, CSS, Bootstrap, and TailwindCSS.",

  "Focused on building fast, scalable, and user-friendly interfaces that deliver modern digital experiences across web and mobile platforms.",

  "Dedicated to continuous learning, problem-solving, and staying updated with the latest technologies to create impactful and innovative solutions.",

  "Let's connect and build something amazing together!",
];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
className="max-w-5xl mx-auto relative z-10"      >
        {/* Section heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio card */}
        <motion.div
          variants={itemVariants}
className="
  bg-white/90
  backdrop-blur-md
  rounded-3xl
  p-6 md:p-10
  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
  border border-gray-100
"        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Who I am
          </h3>
<ul className="space-y-6 text-gray-700 leading-relaxed">
              {bioHighlights.map((line, i) => (
<li
  key={i}
  className="flex items-start gap-3 text-center md:text-left"
>                <span className="text-pink-500 mt-1 flex-shrink-0 text-lg leading-none">▹</span>
             <span className="flex-1 text-[17px] leading-8 font-medium tracking-wide">
  {line}
</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadResume}
            disabled={isDownloading}
            className="px-7 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="px-7 py-3.5 bg-white text-gray-700 border-2 border-gray-200 font-medium rounded-xl hover:border-pink-300 hover:text-pink-600 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Talk
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;