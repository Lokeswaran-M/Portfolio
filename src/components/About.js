import React, { useState, useCallback } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Icons = {
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  idea: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  react: (
    <svg className="h-6 w-6 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zM4.929 7.875a10.064 10.064 0 011.555-1.34c.575-.38 1.228-.555 1.786-.471.477.072.834.345 1.08.77.228.395.288.875.215 1.364-.087.585-.332 1.185-.712 1.74-1.03 1.506-2.87 2.447-4.556 2.447-1.686 0-3.527-.94-4.556-2.447-.38-.555-.625-1.155-.712-1.74-.073-.49-.013-.97.215-1.364.246-.425.603-.698 1.08-.77.558-.084 1.21.091 1.785.47.555.368 1.083.82 1.555 1.34z" clipRule="evenodd" />
    </svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  api: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  design: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  learning: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5m9 5l9-5m-9 5v-7" />
    </svg>
  ),
  handshake: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const bioCards = [
  { icon: Icons.mobile, text: "I'm a passionate Mobile App & Web Developer with expertise in React Native, React, JavaScript, and TypeScript." },
  { icon: Icons.idea, text: "I love transforming ideas into high-performance mobile applications and scalable web solutions with seamless backend integration." },
  { icon: Icons.react, text: "Specialized in React Native development, building feature-rich and intuitive mobile applications with smooth user experiences." },
  { icon: Icons.server, text: "Experienced in backend development using Node.js, Express.js, MySQL, and MongoDB to create secure and scalable server-side apps." },
  { icon: Icons.api, text: "Skilled in API development and testing using Swagger and Thunder Client for reliable and optimized integrations." },
  { icon: Icons.design, text: "Passionate about crafting responsive, visually appealing web applications using React, HTML, CSS, Bootstrap, and TailwindCSS." },
  { icon: Icons.rocket, text: "Focused on building fast, scalable, and user-friendly interfaces that deliver modern digital experiences." },
  { icon: Icons.learning, text: "Dedicated to continuous learning, problem-solving, and staying updated with the latest technologies." },
  { icon: Icons.handshake, text: "Let's connect and build something amazing together!" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const downloadResume = useCallback(async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Lokeswaran-M.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            A quick glance at who I am, what I do, and why I love building things.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bioCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                {card.icon}
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            disabled={isDownloading}
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-3.5 bg-white text-cyan-600 border-2 border-cyan-300 font-medium rounded-full hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-cyan-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Talk
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);