import React, { useEffect, useState, useCallback, useRef  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import ProjectImageSL from "../assets/SmartLaundry.png";
import ProjectImageSLB from "../assets/SmartLaundryBusiness.png";
import ProjectImageTPV from "../assets/TPV.jpg";
import ProjectImageMosque from "../assets/Mosque.png";
import ProjectImageIronX from "../assets/SmartIronXpress.png";
import ProjectImageIronB from "../assets/SmartIronBusiness.png";
import ProjectSmartFar from "../assets/SmartFar.png";
import ProjectImageQR from "../assets/QR.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
const [zoomLevel, setZoomLevel] = useState(1);
const [touchStart, setTouchStart] = useState(0);
  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
  }, []);
useEffect(() => {
  const handleKeyDown = (e) => {
    if (!selectedProject) return;
    
    if (e.key === 'ArrowLeft') {
      setCurrentIndex(prev => prev === 0 ? selectedProject.screens.length - 1 : prev - 1);
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex(prev => prev === selectedProject.screens.length - 1 ? 0 : prev + 1);
    } else if (e.key === 'Escape') {
      setSelectedProject(null);
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [selectedProject]);

const handleTouchStart = (e) => {
  setTouchStart(e.touches[0].clientX);
};

const handleTouchEnd = (e) => {
  if (!touchStart) return;
  const touchEnd = e.changedTouches[0].clientX;
  const diff = touchStart - touchEnd;
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // Swipe left - next image
      setCurrentIndex(prev => prev === selectedProject.screens.length - 1 ? 0 : prev + 1);
    } else {
      // Swipe right - previous image
      setCurrentIndex(prev => prev === 0 ? selectedProject.screens.length - 1 : prev - 1);
    }
  }
  setTouchStart(0);
};

  // Project data with both Android and iOS links
  const projects = [
    {
      id: 4,
      title: "TPV App",
      description: "Point of sale (POS) application for businesses to manage transactions, inventory, and customer data.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tpv_app&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/tpv-app/id6752292667", 
      imageUrl: ProjectImageTPV,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 1,
      title: "Smart Laundry",
      description: "A convenient laundry service app for customers to schedule pickups, track orders, and make payments.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundry.customer&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-pickup-delivery/id6749255733",
      imageUrl: ProjectImageSL,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 2,
      title: "Smart Laundry Business",
      description: "Management app for laundry business owners to manage orders, employees, and business analytics.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartlaundrybusiness&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-laundry-business/id6749540717",
      imageUrl: ProjectImageSLB,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
    {
      id: 3,
      title: "Mosque App",
      description: "An application for mosque management, prayer times, Islamic calendar, and community announcements.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mosque_app&pcampaignid=web_share",
      appStoreUrl: null, // No iOS version available
      imageUrl: ProjectImageMosque,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
        {
      id: 5,
      title: "Smart Iron Xpress",
      description: "An app for customers to schedule ironing service pickups, track garment status, and make secure payments with ease.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartironxpress&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-iron-xpress/id6754585989", // No iOS version available
      imageUrl: ProjectImageIronX,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
            {
      id: 6,
      title: "Smart Iron Business",
      description: "An app for ironing service providers to manage customer orders, pricing, schedules, and delivery operations efficiently.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartironbusiness&pcampaignid=web_share",
      appStoreUrl: "https://apps.apple.com/in/app/smart-iron-business/id6755295734", // No iOS version available
      imageUrl: ProjectImageIronB,
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },
                {
      id: 7,
      title: "Smart Fresh Basket",
      description: "An app for ironing service providers to manage customer orders, pricing, schedules, and delivery operations efficiently.",
      playStoreUrl: null,
      appStoreUrl: null, // No iOS version available
      imageUrl: ProjectSmartFar,
        screens: [
    require('../assets/Splash.png'),
    require('../assets/Login.png'),
    require('../assets/Home.png'),
    require('../assets/ViewProduct.png'),
      require('../assets/Card.png'),
    require('../assets/Stock.png'),
    require('../assets/Logout.jpeg'),
  ],
      technologies: ["React Native","Node.js","Express.js","MySQL","Firebase","JavaScript", "Google Maps API"]
    },

{
  id: 8,
  title: "QR & Barcode Designer Pro",
  description: "Easily create stunning QR codes and professional barcodes with advanced customization, real-time preview, and high-quality export—all in one powerful tool.",
  viewSite: "https://lokeswaran-m.github.io/Qr-Generator/",
  imageUrl: ProjectImageQR,
  technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
}

  ];

  return (
    
    <section id="projects" className="relative py-16 px-4 md:px-8 text-center  mx-auto">
<div className="absolute inset-0 -z-10 overflow-hidden bg-white">
  {/* Subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
  
  {/* Floating elements */}
  <div className="absolute top-20 left-20 w-40 h-40 border border-indigo-200/50 rounded-lg rotate-12 animate-float-slow"></div>
  <div className="absolute bottom-20 right-20 w-32 h-32 border border-pink-200/50 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
  <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-200/50 rounded-lg rotate-45 animate-float-slow" style={{animationDelay: '4s'}}></div>
  
  {/* Subtle dot pattern */}
  <div className="absolute inset-0 opacity-30" style={{
    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }}></div>
</div>

<style jsx>{`
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  .animate-float-slow {
    animation: float-slow 15s ease-in-out infinite;
  }
`}</style>
 <section id="projects" className="relative py-16 px-4 md:px-8 text-center max-w-6xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">Mobile Applications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative group">
              <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 space-x-2">
                 {project.playStoreUrl && (
                <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                  <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                    <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
                    <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
                    <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
                  </svg>
                  Android
                </span>
                 )}
                {project.appStoreUrl && (
                  <span className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                    <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
                      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
                        </g>
                      </g>
                    </svg>
                    iOS
                  </span>
                )}
                </div>
              </div>
                      
              {/* <div className="absolute top-4 right-4 flex space-x-2">
                 {project.playStoreUrl && (
                <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                  <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                    <path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path>
                    <path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path>
                    <path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
                  </svg>
                  Android
                </span>
                 )}
                {project.appStoreUrl && (
                  <span className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
                      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M31.91992,1.07227c-2.33,0.159 -5.05549,1.64527 -6.64648,3.57227c-1.441,1.754 -2.63592,4.35986 -2.16992,6.88086c2.541,0.081 5.17027,-1.43244 6.69727,-3.39844c1.428,-1.833 2.51214,-4.41769 2.11914,-7.05469zM33.16992,11.30078c-3.974,0 -5.65416,1.89258 -8.41016,1.89258c-2.841,0 -4.99955,-1.88672 -8.43555,-1.88672c-3.373,0 -6.96633,2.05278 -9.23633,5.55078c-3.21,4.934 -2.6637,14.20619 2.5293,22.11719c1.857,2.82 4.33717,5.99639 7.57617,6.02539c2.884,0.029 3.69742,-1.83452 7.60742,-1.85352c3.91,-0.032 4.65416,1.87166 7.53516,1.84766c3.239,-0.024 5.85789,-3.55 7.71289,-6.375c1.328,-2.023 1.82342,-3.04694 2.85742,-5.33594c-7.505,-2.839 -8.7112,-13.44953 -1.2832,-17.51953c-2.271,-2.826 -5.44812,-4.46289 -8.45312,-4.46289z"></path>
                        </g>
                      </g>
                    </svg>
                    iOS
                  </span>
                )}
              </div> */}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                        {project.playStoreUrl && (
                <a 
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  <span>Play Store</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                       )}
                {project.appStoreUrl && (
                  <a 
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors"
                  >
                    <span>App Store</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
{project.viewSite && (
<a 
  href={project.viewSite}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
>
  <span>View Site</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</a>
)}
{project.id === 7 && (
  <button
    onClick={() => {
      setSelectedProject(project);
      setCurrentIndex(0);
    }}
    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors"
  >
   <span> View Screens </span>
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </button>
)}
              </div>
            </div>
          </div>
        ))}
      </div>


{selectedProject && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4 pb-3 border-b border-gray-700">
          <div className="flex-1 mr-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {selectedProject.title}
            </h2>
            {selectedProject.description && (
              <p className="text-gray-400 text-sm mt-1">{selectedProject.description}</p>
            )}
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0">
          {/* Thumbnails - Left side on desktop */}
          {selectedProject.screens.length > 1 && (
            <div className="lg:w-20 flex-shrink-0 order-first">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] pb-2 lg:pb-0 lg:pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {selectedProject.screens.map((screen, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 lg:w-full lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                        : 'border-transparent hover:border-gray-500 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={screen}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Image Container */}
          <div className="flex-1 relative min-h-0">
            <div className="relative bg-black/50 rounded-xl overflow-hidden h-full">
              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.5))}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white">
                {currentIndex + 1} / {selectedProject.screens.length}
              </div>

              {/* Image Display Area */}
              <div 
                className="relative w-full flex items-center justify-center overflow-hidden"
                style={{ 
                  height: '500px',
                  cursor: zoomLevel > 1 ? 'grab' : 'default' 
                }}
              >
                <motion.img
                  src={selectedProject.screens[currentIndex]}
                  alt={`${selectedProject.title} - Screen ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{ transform: `scale(${zoomLevel})` }}
                  drag={zoomLevel > 1}
                  dragConstraints={{ 
                    left: -200, 
                    right: 200, 
                    top: -200, 
                    bottom: 200 
                  }}
                  dragElastic={0.1}
                  whileTap={{ cursor: 'grabbing' }}
                />
              </div>

              {/* Navigation Arrows */}
              {selectedProject.screens.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentIndex(prev => 
                      prev === 0 ? selectedProject.screens.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all hover:scale-110 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={() => setCurrentIndex(prev => 
                      prev === selectedProject.screens.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all hover:scale-110 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar & Dots */}
        <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0">
          {/* Progress Bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / selectedProject.screens.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Dots Navigation */}
          {selectedProject.screens.length > 1 && (
            <div className="flex justify-center gap-2 flex-wrap mb-2">
              {selectedProject.screens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="group relative p-1"
                  aria-label={`Go to image ${idx + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-6 bg-blue-500'
                        : 'bg-gray-500 group-hover:bg-gray-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Additional Info */}
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Press ← → to navigate</span>
            <span>Press ESC to close</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)}

</section>
      {/* Add the animation keyframes to your global CSS or use a style tag */}
      <style js>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default Projects;



