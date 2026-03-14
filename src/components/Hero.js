import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import myPic from '../assets/react-original.svg'; // Import your image
import android from '../assets/android-original.svg';
import apple from '../assets/apple-big-logo.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const texts = ["React Native Developer", "Full Stack Engineer", "JavaScript Specialist", "UI/UX Enthusiast"];
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    damping: 15,
    stiffness: 100
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    damping: 15,
    stiffness: 100
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Text rotation effect
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, [texts.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5" 
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
        }}
      />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        {/* Main Content - Centered with larger canvas */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24"
          style={{
            rotateX: isMobile ? undefined : rotateX,
            rotateY: isMobile ? undefined : rotateY,
            transformStyle: 'preserve-3d'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name and Title - adjusted width for larger canvas */}
          <motion.div 
            className="text-center lg:text-right flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              Lokeswaran
            </motion.h1>
            
            <motion.div 
              className="w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto lg:mx-0 lg:ml-auto mb-4 md:mb-6"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            
            <motion.div 
              className="h-12 md:h-16 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p 
                key={textIndex}
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {texts[textIndex]}
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.button 
              className="mt-8 lg:mt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base group relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Molecule Avatar Component - Now 80% of page width on large screens */}
          <motion.div 
            className="flex-1 flex justify-center items-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-4xl mx-auto">
              <MoleculeAvatar />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span 
            className="text-xs md:text-sm mb-3 font-medium text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
            <path
              d="M12 4v16m0 0l-6-6m6 6l6-6"
              stroke="url(#arrowGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.svg>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
      `}</style>
    </div>
  );
};

// Optimized MoleculeAvatar Component with React Native Official Colors and Image Cycling
const MoleculeAvatar = () => {
  const canvasRef = useRef(null);
  // Increased base size for 80% page width
  const BASE_SIZE = 1024;
  const SIZE = BASE_SIZE;
  const CX = SIZE/2, CY = SIZE/2, R = SIZE/2 - 8;

  const mouse = useRef({ x: -9999, y: -9999, active: false, pressed: false });
  const dotsRef = useRef([]);
  const animRef = useRef(null);
  const offCanvas = useRef(document.createElement('canvas'));
  const cycleTimerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUserUploaded, setIsUserUploaded] = useState(false);

  // Array of all imported images (24 images total)
  const imageArray = useMemo(() => [
    myPic,
    android,
    apple
  ], []);

  // React Native Official Color Palette - Memoized
  const colorPalette = useMemo(() => ({
    light: [
      'rgba(97, 218, 251, 0.9)', // #61DAFB - Primary React Native Blue
      'rgba(0, 216, 255, 0.9)',  // #00D8FF - Bright Blue
      'rgba(97, 218, 251, 0.85)',
      'rgba(120, 225, 255, 0.9)',
      'rgba(97, 218, 251, 0.95)',
    ],
    medium: [
      'rgba(45, 156, 219, 0.85)',
      'rgba(32, 35, 42, 0.8)',    // #20232A - React Native Dark
      'rgba(55, 178, 235, 0.85)',
      'rgba(67, 186, 245, 0.85)',
      'rgba(45, 156, 219, 0.9)',
    ],
    dark: [
      'rgba(24, 28, 34, 0.8)',
      'rgba(97, 218, 251, 0.6)',
      'rgba(32, 35, 42, 0.9)',
      'rgba(18, 22, 28, 0.8)',
      'rgba(45, 156, 219, 0.7)',
    ]
  }), []);

  // Optimized dot builder with React Native color palette
  const buildDotsFromData = useCallback((imgData) => {
    const dots = [];
    const STEP = 10;
    const radiusSq = R * R;
    
    for (let y = 0; y < SIZE; y += STEP) {
      for (let x = 0; x < SIZE; x += STEP) {
        const dx = x - CX;
        const dy = y - CY;
        if (dx*dx + dy*dy > radiusSq) continue;
        
        const idx = (y * SIZE + x) * 4;
        const r = imgData.data[idx];
        const g = imgData.data[idx+1];
        const b = imgData.data[idx+2];
        const a = imgData.data[idx+3];
        
        if (a < 10) continue;
        
        const bright = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        if (bright < 0.04) continue;

        const dotR = bright * 4.5 + 1.2;
        const colorIndex = (Math.floor(x / STEP) + Math.floor(y / STEP) + Math.floor(bright * 10)) % 5;
        
        let col;
        if (bright > 0.65) {
          col = colorPalette.light[colorIndex];
        } else if (bright > 0.35) {
          col = colorPalette.medium[colorIndex];
        } else {
          col = colorPalette.dark[colorIndex];
        }

        dots.push({
          ox: x, oy: y,
          cx: x, cy: y,
          vx: 0, vy: 0,
          r: dotR,
          col: col,
          bright: bright,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    return dots;
  }, [SIZE, CX, CY, R, colorPalette]);

  // Optimized fallback builder
  const buildFallbackDots = useCallback(() => {
    const off = offCanvas.current;
    const octx = off.getContext('2d');
    octx.clearRect(0, 0, SIZE, SIZE);
    
    const gradient = octx.createRadialGradient(CX, CY, 0, CX, CY, R);
    gradient.addColorStop(0, '#61DAFB');
    gradient.addColorStop(0.4, '#00D8FF');
    gradient.addColorStop(0.7, '#2D9CDB');
    gradient.addColorStop(1, '#20232A');
    
    octx.beginPath();
    octx.arc(CX, CY, R, 0, Math.PI * 2);
    octx.fillStyle = gradient;
    octx.fill();
    
    return buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
  }, [SIZE, CX, CY, R, buildDotsFromData]);





// Replace the loadImageFromArray function
const loadImageFromArray = useCallback((index) => {
  if (isUserUploaded) return;
  
  const off = offCanvas.current;
  const octx = off.getContext('2d');
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    octx.clearRect(0, 0, SIZE, SIZE);
    octx.save();
    octx.beginPath();
    octx.arc(CX, CY, R, 0, Math.PI * 2);
    octx.clip();
    
    const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.95;
    const width = img.width * scale;
    const height = img.height * scale;
    const x = CX - width/2;
    const y = CY - height/2;
    
    octx.drawImage(img, x, y, width, height);
    octx.restore();
    
    const newDots = buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
    
    // CIRCULAR CAROUSEL ANIMATION
    newDots.forEach((d, i) => {
      // Position dots evenly around the circle
      const angle = (i / newDots.length) * Math.PI * 2;
      const radius = R * 0.9;
      d.cx = CX + Math.cos(angle) * radius;
      d.cy = CY + Math.sin(angle) * radius;
      
      // Add tangential velocity for rotation effect
      d.vx = -Math.sin(angle) * 2;
      d.vy = Math.cos(angle) * 2;
    });
    
    dotsRef.current = newDots;
  };
  img.src = imageArray[index];
}, [SIZE, CX, CY, R, buildDotsFromData, isUserUploaded, imageArray]);







  // Function to cycle to next image - Modified to cycle through ALL images
  const cycleToNextImage = useCallback(() => {
    if (isUserUploaded) return;
    
    setCurrentImageIndex((prevIndex) => {
      // Calculate next index, wrapping around to 0 when reaching the end
      const nextIndex = (prevIndex + 1) % imageArray.length;
      loadImageFromArray(nextIndex);
      return nextIndex;
    });
  }, [imageArray.length, loadImageFromArray, isUserUploaded]);

  useEffect(() => {
    offCanvas.current.width = offCanvas.current.height = SIZE;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Initialize with fallback
    dotsRef.current = buildFallbackDots();

    // Scatter intro animation
    dotsRef.current.forEach(d => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * SIZE * 0.9;
      d.cx = CX + Math.cos(angle) * distance;
      d.cy = CY + Math.sin(angle) * distance;
      d.vx = 0;
      d.vy = 0;
    });

    // Load the first image
    setTimeout(() => {
      loadImageFromArray(0);
    }, 100);

    // Set up 10-second timer to cycle through ALL images
    cycleTimerRef.current = setInterval(() => {
      cycleToNextImage();
    }, 10000); // Changes every 10 seconds

    // Mouse event handlers
    let rafId = null;
    const getPos = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const scaleX = SIZE / rect.width;
      const scaleY = SIZE / rect.height;
      
      if (e.touches) {
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX,
          y: (e.touches[0].clientY - rect.top) * scaleY
        };
      }
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const updateMouse = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const p = getPos(e);
        mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
        mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
      });
    };

    const handleMove = (e) => { 
      e.preventDefault?.();
      mouse.current.active = true; 
      updateMouse(e); 
    };
    
    const handleLeave = () => { 
      mouse.current.active = false; 
      mouse.current.pressed = false; 
      mouse.current.x = -9999; 
      mouse.current.y = -9999; 
    };
    
    const handleDown = (e) => { 
      e.preventDefault?.();
      mouse.current.pressed = true; 
      updateMouse(e); 
    };
    
    const handleUp = () => { mouse.current.pressed = false; };
    
    const handleTouchStart = (e) => { 
      e.preventDefault(); 
      mouse.current.active = true; 
      mouse.current.pressed = true; 
      updateMouse(e); 
    };
    
    const handleTouchMove = (e) => { 
      e.preventDefault(); 
      mouse.current.active = true; 
      updateMouse(e); 
    };
    
    const handleTouchEnd = (e) => { 
      e.preventDefault(); 
      mouse.current.pressed = false; 
      mouse.current.active = false; 
      mouse.current.x = -9999; 
      mouse.current.y = -9999; 
    };

    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Animation loop
    let lastTimestamp = 0;
    
    const draw = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      
      ctx.clearRect(0, 0, SIZE, SIZE);
      lastTimestamp = timestamp;
      
      const REPEL_R = mouse.current.pressed ? 140 : 100;
      const REPEL_F = mouse.current.pressed ? 25 : 15;
      const ATTRACT_F = 0.1;
      const DAMPEN = 0.85;

      const dots = dotsRef.current;
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;
      const mouseActive = mouse.current.active;
      const mousePressed = mouse.current.pressed;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        
        const dx = d.ox - d.cx;
        const dy = d.oy - d.cy;
        let ax = dx * ATTRACT_F;
        let ay = dy * ATTRACT_F;

        if (mouseActive) {
          const mdx = d.cx - mouseX;
          const mdy = d.cy - mouseY;
          const distSq = mdx*mdx + mdy*mdy;
          const dist = Math.sqrt(distSq) || 0.001;
          
          if (dist < REPEL_R) {
            const strength = (1 - dist/REPEL_R) * REPEL_F;
            const normX = mdx / dist;
            const normY = mdy / dist;
            ax += normX * strength;
            ay += normY * strength;
            
            if (mousePressed) {
              ax += (Math.random() - 0.5) * strength * 0.4;
              ay += (Math.random() - 0.5) * strength * 0.4;
            }
          }
        }

        d.vx = (d.vx + ax) * DAMPEN;
        d.vy = (d.vy + ay) * DAMPEN;
        d.cx += d.vx;
        d.cy += d.vy;

        if (!mouseActive) {
          d.cx += Math.sin(timestamp * 0.0015 + d.phase) * 0.4;
          d.cy += Math.cos(timestamp * 0.0015 + d.phase) * 0.4;
        }

        ctx.beginPath();
        ctx.arc(d.cx, d.cy, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.col;
        
        if (mouseActive && Math.hypot(d.cx - mouseX, d.cy - mouseY) < REPEL_R) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = 'rgba(97, 218, 251, 0.7)';
        } else {
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(97, 218, 251, 0.4)';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    // Image upload handler
    window.uploadAvatar = (file) => {
      if (!file) return;
      setIsUserUploaded(true);
      
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const off = offCanvas.current;
          const octx = off.getContext('2d');
          octx.clearRect(0, 0, SIZE, SIZE);
          octx.save();
          octx.beginPath();
          octx.arc(CX, CY, R, 0, Math.PI * 2);
          octx.clip();
          
          const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.95;
          const width = img.width * scale;
          const height = img.height * scale;
          const x = CX - width/2;
          const y = CY - height/2;
          
          octx.drawImage(img, x, y, width, height);
          octx.restore();
          
          const newDots = buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
          
          newDots.forEach(d => {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * SIZE * 0.9;
            d.cx = CX + Math.cos(angle) * distance;
            d.cy = CY + Math.sin(angle) * distance;
            d.vx = 0;
            d.vy = 0;
          });
          
          dotsRef.current = newDots;
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    };

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
      }
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [buildFallbackDots, buildDotsFromData, loadImageFromArray, cycleToNextImage, SIZE, CX, CY, R]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <canvas 
        ref={canvasRef} 
        width={SIZE} 
        height={SIZE} 
className="rounded-xl border border-cyan-400/30 cursor-crosshair relative z-10 w-full h-auto"       
 style={{
          filter: 'drop-shadow(0 0 25px rgba(97, 218, 251, 0.4))',
          transition: 'filter 0.3s ease',
          background: 'transparent',
          maxWidth: '80vw',
          width: '70%',
          height: 'auto',
          aspectRatio: '1/1',
          margin: '0 auto'
        }}
      />
      
      <div className="mt-6 flex gap-3">
        <button 
          onClick={() => document.getElementById('avatarUpload')?.click()} 
          className="bg-transparent border border-[#61DAFB]/50 text-[#61DAFB] px-6 py-2 text-sm uppercase tracking-widest hover:border-[#61DAFB] hover:text-[#00D8FF] transition-all rounded-full backdrop-blur-sm"
        >
         ⬡ Click & Have Fun
        </button>
        <input 
          type="file" 
          id="avatarUpload" 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => e.target.files[0] && window.uploadAvatar?.(e.target.files[0])} 
        />
      </div>
      
    </div>
  );
};

export default Hero;




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

//   const handleSideClick = (side) => {
//     if (isMobile) {
//       setActiveSide(activeSide === side ? null : side);
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <motion.div 
//           className="absolute -top-16 -left-16 w-48 h-48 md:w-96 md:h-96 bg-pink-500 rounded-full opacity-5"
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
//           className="absolute top-1/2 -right-16 w-40 h-40 md:w-80 md:h-80 bg-blue-500 rounded-full opacity-5"
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
//           className="absolute bottom-10 left-1/4 w-36 h-36 md:w-64 md:h-64 bg-purple-500 rounded-full opacity-5"
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

//       <div className="container mx-auto px-4 py-4 md:py-8 min-h-screen flex flex-col justify-center relative z-10">
//         {/* Name Header */}
//         <motion.div 
//           className="text-center mb-4 md:mb-12 mt-4 md:mt-0"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 md:mb-4">
//             Lokeswaran
//           </h1>
//           <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
//           <p className="text-base md:text-xl text-gray-600 mt-2 md:mt-4">Full Stack Developer</p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-16 mb-8 md:mb-0">
//           {/* Left Side - Frontend Developer */}
//           <motion.div
//             className="frontend flex-1 flex flex-col items-center lg:items-end justify-center text-center lg:text-right p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg w-full"
//             onHoverStart={() => !isMobile && setActiveSide('frontend')}
//             onHoverEnd={() => !isMobile && setActiveSide(null)}
//             onClick={() => handleSideClick('frontend')}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ 
//               opacity: activeSide && activeSide !== 'frontend' && !isMobile ? 0.7 : 1,
//               x: 0,
//               scale: activeSide === 'frontend' && !isMobile ? 1.02 : 1
//             }}
//             transition={{ duration: 0.5 }}
//             whileHover={!isMobile ? { y: -5 } : {}}
//           >
//             <div className="w-full max-w-md space-y-2 md:space-y-6">
//               <motion.h2 
//                 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Frontend<span className="text-red-500"> Developer</span>
//               </motion.h2>
              
//               <motion.p 
//                 className="text-xs md:text-lg text-gray-600 leading-relaxed"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 I create responsive and interactive user interfaces using modern technologies like React, React Native, and JavaScript frameworks.
//               </motion.p>
              
//               <motion.div 
//                 className="mt-2 md:mt-6 flex flex-wrap justify-center lg:justify-end gap-1 md:gap-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {frontendSkills.map((skill, index) => (
//                   <motion.span 
//                     key={index}
//                     className="bg-red-100 text-red-800 px-2 py-1 text-xs rounded-full md:px-3 md:text-sm font-medium"
//                     whileHover={!isMobile ? { scale: 1.1 } : {}}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </motion.div>
              
//               <motion.button 
//                 className="mt-3 md:mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 md:px-6 md:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-xs md:text-base"
//                 whileHover={!isMobile ? { scale: 1.05 } : {}}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 View Frontend Projects
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Center Divider/Icon - Hidden on mobile */}
//           <motion.div 
//             className="hidden md:flex flex-col items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
//             <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100">
//               <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//               </svg>
//             </div>
//             <div className="h-0.5 w-16 bg-gray-300 lg:h-16 lg:w-0.5 my-4"></div>
//           </motion.div>

//           {/* Right Side - Backend Developer */}
//           <motion.div
//             className="backend flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg w-full"
//             onHoverStart={() => !isMobile && setActiveSide('backend')}
//             onHoverEnd={() => !isMobile && setActiveSide(null)}
//             onClick={() => handleSideClick('backend')}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ 
//               opacity: activeSide && activeSide !== 'backend' && !isMobile ? 0.7 : 1,
//               x: 0,
//               scale: activeSide === 'backend' && !isMobile ? 1.02 : 1
//             }}
//             transition={{ duration: 0.5 }}
//             whileHover={!isMobile ? { y: -5 } : {}}
//           >
//             <div className="w-full max-w-md space-y-2 md:space-y-6">
//               <motion.h2 
//                 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Backend<span className="text-blue-500"> Developer</span>
//               </motion.h2>
              
//               <motion.p 
//                 className="text-xs md:text-lg text-gray-600 leading-relaxed"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 I build secure, scalable server-side applications and APIs using Node.js, Express, and modern database technologies.
//               </motion.p>
              
//               <motion.div 
//                 className="mt-2 md:mt-6 flex flex-wrap justify-center lg:justify-start gap-1 md:gap-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {backendSkills.map((skill, index) => (
//                   <motion.span 
//                     key={index}
//                     className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full md:px-3 md:text-sm font-medium"
//                     whileHover={!isMobile ? { scale: 1.1 } : {}}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </motion.div>
              
//               <motion.button 
//                 className="mt-3 md:mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 md:px-6 md:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-xs md:text-base"
//                 whileHover={!isMobile ? { scale: 1.05 } : {}}
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
//           className="mt-4 md:mt-0 absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-700 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <span className="text-xs md:text-sm mb-1 md:mb-2">Scroll down</span>
//           <motion.div 
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
