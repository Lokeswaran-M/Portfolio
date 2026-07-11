import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Smartphone } from 'lucide-react';
import ProjectImageSL from "../assets/SmartLaundry.png";
import ProjectImageSLB from "../assets/SmartLaundryBusiness.png";
import ProjectImageTPV from "../assets/TPV.jpg";
import ProjectImageMosque from "../assets/Mosque.png";
import ProjectImageIronX from "../assets/SmartIronXpress.png";
import ProjectImageIronB from "../assets/SmartIronBusiness.png";
import ProjectSmartFar from "../assets/SmartFar.png";
import ProjectImageQR from "../assets/QR.png";
import ProjectClearCut from "../assets/ClearCut.png";
import ProjectFitTrackerAi from "../assets/FitTrackAi.png";
import ProjectWAManager from "../assets/WA-Manager.png";
import ProjectZenCutz from "../assets/ZenCutz.png";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentRef = imgRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '150px' }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      {!loaded && <div className="absolute inset-0 bg-gray-200" />}
      {loaded && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable="false"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

// Individual project card with its own showAllTech state
const ProjectCard = React.memo(({ project, index, isVisible }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group overflow-hidden">
        <LazyImage 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {(showAllTech ? project.technologies : project.technologies.slice(0, 4)).map((tech, i) => (
            <span key={i} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium self-center"
            >
              {showAllTech ? "Show Less" : `+${project.technologies.length - 4} more`}
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {project.playStoreUrl && (
            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Play Store
            </a>
          )}
          {project.appStoreUrl && (
            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg hover:from-gray-800 hover:to-black transition-all duration-200">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          )}
          {project.viewSite && (
            <a href={project.viewSite} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-all duration-200">
              View Site
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          )}
          {project.screens && (
            <button
              onClick={() => {
                document.dispatchEvent(new CustomEvent('openScreens', { detail: { project, index: 0 } }));
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <Smartphone className="w-4 h-4 mr-2" />
              View Screens
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [isPhoneView, setIsPhoneView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Listen for screen open events from cards
  useEffect(() => {
    const handler = (e) => {
      setSelectedProject(e.detail.project);
      setCurrentIndex(e.detail.index || 0);
      setZoomLevel(1);
      setIsPhoneView(true);
    };
    document.addEventListener('openScreens', handler);
    return () => document.removeEventListener('openScreens', handler);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (!selectedProject) return;
    switch(e.key) {
      case 'ArrowLeft':
        setCurrentIndex(prev => prev === 0 ? selectedProject.screens.length - 1 : prev - 1);
        break;
      case 'ArrowRight':
        setCurrentIndex(prev => prev === selectedProject.screens.length - 1 ? 0 : prev + 1);
        break;
      case 'Escape':
        setSelectedProject(null);
        setZoomLevel(1);
        break;
      default: break;
    }
  }, [selectedProject]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStartCb = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEndCb = useCallback((e) => {
    if (!touchStart || !selectedProject) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex(prev => prev === selectedProject.screens.length - 1 ? 0 : prev + 1);
      } else {
        setCurrentIndex(prev => prev === 0 ? selectedProject.screens.length - 1 : prev - 1);
      }
    }
    setTouchStart(0);
  }, [touchStart, selectedProject]);

  const mobileApps = useMemo(() => [
    {
      id: 4, title: "TPV App",
      description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/tpv-app/id6752292667", 
      imageUrl: ProjectImageTPV,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 1, title: "Smart Laundry",
      description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
      imageUrl: ProjectImageSL,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 2, title: "Smart Laundry Business",
      description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
      imageUrl: ProjectImageSLB,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 3, title: "Mosque App",
      description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
      appStoreUrl: null,
      imageUrl: ProjectImageMosque,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 5, title: "Smart Iron Xpress",
      description: "An app for customers to schedule ironing service pickups, track garment status, and make secure payments with ease.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartironxpress&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-iron-xpress/id6754585989",
      imageUrl: ProjectImageIronX,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 6, title: "Smart Iron Business",
      description: "An app for ironing service providers to manage customer orders, pricing, schedules, and delivery operations efficiently.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartironbusiness&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-iron-business/id6755295734",
      imageUrl: ProjectImageIronB,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 7, title: "Smart Fresh Basket",
      description: "Online grocery shopping app with fresh produce delivery, order tracking, and smart inventory management.",
      playStoreUrl: null, appStoreUrl: null,
      imageUrl: ProjectSmartFar,
      screens: [
        require('../assets/Splash.png'), require('../assets/Login.png'),
        require('../assets/Home.png'), require('../assets/ViewProduct.png'),
        require('../assets/Card.png'), require('../assets/Stock.png'),
        require('../assets/Logout.jpeg'),
      ],
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 10, title: "Fit Tracker AI",
      description: "Smarter fitness starts here. Track weight, hydration, BMI, and daily progress with personalized AI-powered insights.",
      playStoreUrl: null, appStoreUrl: null,
      imageUrl: ProjectFitTrackerAi,
      screens: [
        require('../assets/Fit1.png'), require('../assets/Fit2.png'),
        require('../assets/Fit3.png'), require('../assets/Fit4.png'),
        require('../assets/Fit5.png'), require('../assets/Fit6.png'),
        require('../assets/Fit7.png'), require('../assets/Fit8.png'),
        require('../assets/Fit9.png'),
      ],
      technologies: ["React Native","JavaScript", "Google AI Studio"]
    }
  ], []);

  const webApps = useMemo(() => [
    {
      id: 8, title: "QR Designer Pro",
      description: "Easily create stunning QR codes and professional barcodes with advanced customization, real-time preview, and high-quality export—all in one powerful tool.",
      viewSite: "https://lokeswaran-m.github.io/Qr-Generator/",
      imageUrl: ProjectImageQR,
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 9, title: "Clear Cut",
      description: "A professional AI background remover built with React, Framer Motion, and Tailwind CSS, offering fast local image processing, elegant UI/UX, responsive design, drag-and-drop uploads, HD downloads, and seamless user interactions.",
      viewSite: "https://lokeswaran-m.github.io/ClearCut/",
      imageUrl: ProjectClearCut,
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 11, title: "WA Manager",
      description: "A modern WhatsApp Web management platform built with React, Node.js, Express, Socket.IO, and Baileys. It enables real-time messaging, contact management, status viewing, bulk messaging, group management, QR-based authentication, reports, and a responsive dashboard with a clean, business-focused UI.",
      viewSite: "https://github.com/Lokeswaran-M/WhatsappAPI",
      imageUrl: ProjectWAManager,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "Socket.IO", "Baileys", "WhatsApp Web API"]
    },
    {
      id: 12, title: "Zen Cutz",
      description: "A modern AI-powered video trimming and conversion web application built with React, Node.js, and Express.js. ZenCutz allows users to trim, convert, preview, and download videos from YouTube, Instagram, or local uploads through a clean, responsive interface.",
      viewSite: "https://github.com/Lokeswaran-M/ZenCutz",
      imageUrl: ProjectZenCutz,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Python", "FastAPI", "Redis", "FFmpeg", "yt-dlp"]
    }
  ], []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    setZoomLevel(1);
    setIsPhoneView(true);
  }, []);

  return (
    <section id="projects" className="relative py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-16"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Mobile Applications</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileApps.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold mt-20 mb-16"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Web Applications</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webApps.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl w-full max-w-sm max-h-[85vh] flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStartCb}
              onTouchEnd={handleTouchEndCb}
            >
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-semibold text-gray-900 truncate">{selectedProject.title}</h2>
                  <p className="text-xs text-gray-500">{currentIndex + 1}/{selectedProject.screens.length}</p>
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <button onClick={() => setIsPhoneView(!isPhoneView)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" title={isPhoneView ? "Switch to full view" : "Switch to phone view"}>
                    <Smartphone className="w-4 h-4 text-gray-600" />
                  </button>
                  <button onClick={handleCloseModal} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center p-3 overflow-hidden bg-gray-50 relative">
                {isPhoneView ? (
                  <div className="relative" style={{ width: '238px', height: '516px' }}>
                    <div className="relative w-full h-full rounded-[2.3rem] bg-neutral-900 border-[6px] border-neutral-800 shadow-2xl overflow-hidden">
                      <div className="absolute inset-[5px] rounded-[2rem] overflow-hidden bg-black">
                        <motion.img
                          key={currentIndex}
                          src={selectedProject.screens[currentIndex]}
                          alt={`Screen ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gray-500 z-10" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      key={currentIndex}
                      src={selectedProject.screens[currentIndex]}
                      alt={`Screen ${currentIndex + 1}`}
                      className="max-w-full max-h-[60vh] object-contain rounded-lg"
                      style={{ transform: `scale(${zoomLevel})` }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                      <button onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
                        className="p-1.5 bg-white/90 shadow rounded-full hover:bg-gray-100 transition-colors">
                        <ZoomOut className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <button onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
                        className="p-1.5 bg-white/90 shadow rounded-full hover:bg-gray-100 transition-colors">
                        <ZoomIn className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                )}

                {selectedProject.screens.length > 1 && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => prev === 0 ? selectedProject.screens.length - 1 : prev - 1); }}
                      className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 shadow rounded-full flex items-center justify-center hover:bg-gray-100 transition-all z-20">
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => prev === selectedProject.screens.length - 1 ? 0 : prev + 1); }}
                      className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 shadow rounded-full flex items-center justify-center hover:bg-gray-100 transition-all z-20">
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-3 border-t border-gray-100">
                <div className="flex justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                  {selectedProject.screens.map((screen, idx) => (
                    <button key={idx} onClick={() => setCurrentIndex(idx)}
                      className={`flex-shrink-0 w-10 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        idx === currentIndex ? 'border-blue-500 shadow-md scale-105' : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                      }`}>
                      <img src={screen} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;