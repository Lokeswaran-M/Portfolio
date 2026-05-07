import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import myPic from '../assets/react-original.svg';
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
        {/* Main Content */}
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
          {/* Name and Title */}
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

          {/* Molecule Avatar Component */}
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

// Fixed MoleculeAvatar Component
const MoleculeAvatar = () => {
  const canvasRef = useRef(null);
  const BASE_SIZE = 800; // Reduced for better performance
  const SIZE = BASE_SIZE;
  const CX = SIZE/2, CY = SIZE/2, R = SIZE/2 - 8;

  const mouse = useRef({ x: -9999, y: -9999, active: false, pressed: false });
  const dotsRef = useRef([]);
  const animRef = useRef(null);
  const offCanvas = useRef(document.createElement('canvas'));
  const cycleTimerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUserUploaded, setIsUserUploaded] = useState(false);

  // Array of images with simplified structure
  const imageArray = useMemo(() => [
    { src: myPic, name: 'React Native' },
    { src: android, name: 'Android' },
    { src: apple, name: 'Apple' }
  ], []);

  // Simple color palette based on image type
  const getDotColor = useCallback((imageName, brightness, x, y) => {
    if (imageName === 'Android') {
      // Android green shades
      const greenIntensity = Math.floor(brightness * 200);
      if (brightness > 0.7) {
        return `rgba(100, 255, 150, ${0.7 + brightness * 0.3})`;
      } else if (brightness > 0.4) {
        return `rgba(61, 220, 132, ${0.6 + brightness * 0.3})`;
      } else {
        return `rgba(40, 180, 100, ${0.5 + brightness * 0.3})`;
      }
    } else if (imageName === 'Apple') {
      // Apple black/gray shades
      const grayValue = Math.floor(50 + brightness * 150);
      if (brightness > 0.7) {
        return `rgba(180, 180, 180, ${0.7 + brightness * 0.3})`;
      } else if (brightness > 0.4) {
        return `rgba(100, 100, 100, ${0.6 + brightness * 0.3})`;
      } else {
        return `rgba(30, 30, 30, ${0.5 + brightness * 0.3})`;
      }
    } else {
      // React Native blue shades
      if (brightness > 0.7) {
        return `rgba(97, 218, 251, ${0.7 + brightness * 0.3})`;
      } else if (brightness > 0.4) {
        return `rgba(45, 156, 219, ${0.6 + brightness * 0.3})`;
      } else {
        return `rgba(32, 35, 42, ${0.5 + brightness * 0.3})`;
      }
    }
  }, []);

  // Build dots from image data
  const buildDotsFromImage = useCallback((imageName, imgData) => {
    const dots = [];
    const STEP = 8; // Smaller step for more detail
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
        
        // Skip transparent pixels
        if (a < 50) continue;
        
        // Calculate brightness
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        
        // Skip very dark pixels
        if (brightness < 0.1) continue;
        
        const dotSize = Math.max(1.5, brightness * 4);
        const color = getDotColor(imageName, brightness, x, y);
        
        dots.push({
          ox: x, oy: y,
          cx: x, cy: y,
          vx: 0, vy: 0,
          r: dotSize,
          col: color,
          brightness: brightness,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    
    return dots;
  }, [SIZE, CX, CY, R, getDotColor]);

  // Load image from array
  const loadImageFromArray = useCallback((index) => {
    if (isUserUploaded) return;
    
    const imageInfo = imageArray[index];
    const off = offCanvas.current;
    const octx = off.getContext('2d');
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Clear and draw image
      octx.clearRect(0, 0, SIZE, SIZE);
      octx.save();
      octx.beginPath();
      octx.arc(CX, CY, R, 0, Math.PI * 2);
      octx.clip();
      
      // Calculate scaling to fit circle
      const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.9;
      const width = img.width * scale;
      const height = img.height * scale;
      const x = CX - width/2;
      const y = CY - height/2;
      
      octx.drawImage(img, x, y, width, height);
      octx.restore();
      
      // Get image data and build dots
      const imgData = octx.getImageData(0, 0, SIZE, SIZE);
      const newDots = buildDotsFromImage(imageInfo.name, imgData);
      
      // Apply initial scatter animation
      newDots.forEach(d => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * SIZE * 0.8;
        d.cx = CX + Math.cos(angle) * distance;
        d.cy = CY + Math.sin(angle) * distance;
        d.vx = 0;
        d.vy = 0;
      });
      
      dotsRef.current = newDots;
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${imageInfo.name}`);
      // Create fallback gradient dots
      createFallbackDots(imageInfo.name);
    };
    
    img.src = imageInfo.src;
  }, [SIZE, CX, CY, R, buildDotsFromImage, isUserUploaded, imageArray]);

  // Create fallback dots with gradient
  const createFallbackDots = useCallback((imageName) => {
    const off = offCanvas.current;
    const octx = off.getContext('2d');
    octx.clearRect(0, 0, SIZE, SIZE);
    
    // Create radial gradient
    const gradient = octx.createRadialGradient(CX, CY, 0, CX, CY, R);
    
if (imageName === 'Android') {
  gradient.addColorStop(0, '#3DDC84');   // Android green
  gradient.addColorStop(0.5, '#2BB673'); // smooth middle
  gradient.addColorStop(1, '#1B8F5A');   // darker green
} else if (imageName === 'Apple') {
  gradient.addColorStop(0, '#8E8E93');   // Apple grey
  gradient.addColorStop(0.5, '#3A3A3C'); // deep grey
  gradient.addColorStop(1, '#000000');   // black
}else {
      gradient.addColorStop(0, '#61DAFB');
      gradient.addColorStop(0.5, '#00D8FF');
      gradient.addColorStop(1, '#20232A');
    }
    
    octx.beginPath();
    octx.arc(CX, CY, R, 0, Math.PI * 2);
    octx.fillStyle = gradient;
    octx.fill();
    
    const imgData = octx.getImageData(0, 0, SIZE, SIZE);
    const newDots = buildDotsFromImage(imageName, imgData);
    dotsRef.current = newDots;
  }, [SIZE, CX, CY, R, buildDotsFromImage]);

  // Cycle to next image
  const cycleToNextImage = useCallback(() => {
    if (isUserUploaded) return;
    
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % imageArray.length;
      loadImageFromArray(nextIndex);
      return nextIndex;
    });
  }, [imageArray.length, loadImageFromArray, isUserUploaded]);

  useEffect(() => {
    offCanvas.current.width = offCanvas.current.height = SIZE;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Initialize with React Native
    loadImageFromArray(0);

    // Set up 8-second timer
    cycleTimerRef.current = setInterval(() => {
      cycleToNextImage();
    }, 8000);

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
      
      const REPEL_R = mouse.current.pressed ? 120 : 80;
      const REPEL_F = mouse.current.pressed ? 20 : 12;
      const ATTRACT_F = 0.08;
      const DAMPEN = 0.88;

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

        if (mouseActive && mouseX > 0 && mouseX < SIZE && mouseY > 0 && mouseY < SIZE) {
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
              ax += (Math.random() - 0.5) * strength * 0.3;
              ay += (Math.random() - 0.5) * strength * 0.3;
            }
          }
        }

        d.vx = (d.vx + ax) * DAMPEN;
        d.vy = (d.vy + ay) * DAMPEN;
        d.cx += d.vx;
        d.cy += d.vy;

        // Gentle floating animation
        if (!mouseActive) {
          d.cx += Math.sin(timestamp * 0.001 + d.phase) * 0.3;
          d.cy += Math.cos(timestamp * 0.001 + d.phase) * 0.3;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(d.cx, d.cy, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.col;
        
        // Add glow effect
        if (mouseActive && Math.hypot(d.cx - mouseX, d.cy - mouseY) < REPEL_R) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = d.col;
        } else {
          ctx.shadowBlur = 8;
          ctx.shadowColor = d.col;
        }
        
        ctx.fill();
      }
      
      ctx.shadowBlur = 0;
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
          
          const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.9;
          const width = img.width * scale;
          const height = img.height * scale;
          const x = CX - width/2;
          const y = CY - height/2;
          
          octx.drawImage(img, x, y, width, height);
          octx.restore();
          
          const imgData = octx.getImageData(0, 0, SIZE, SIZE);
          const newDots = buildDotsFromImage('Custom', imgData);
          
          newDots.forEach(d => {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * SIZE * 0.8;
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
  }, [loadImageFromArray, cycleToNextImage, buildDotsFromImage, SIZE, CX, CY, R]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <canvas 
        ref={canvasRef} 
        width={SIZE} 
        height={SIZE} 
        className="rounded-xl border border-cyan-400/30 cursor-crosshair relative z-10 w-full h-auto"       
        style={{
          filter: 'drop-shadow(0 0 20px rgba(97, 218, 251, 0.3))',
          transition: 'filter 0.3s ease',
          background: 'transparent',
          maxWidth: '80vw',
          width: '70%',
          height: 'auto',
          aspectRatio: '1/1',
          margin: '0 auto'
        }}
      />
      
      <div className="mt-6 flex gap-3 flex-wrap justify-center">
        <button 
          onClick={() => document.getElementById('avatarUpload')?.click()} 
          className="bg-transparent border border-[#61DAFB]/50 text-[#61DAFB] px-6 py-2 text-sm uppercase tracking-widest hover:border-[#61DAFB] hover:text-[#00D8FF] transition-all rounded-full backdrop-blur-sm"
        >
          ⬡ Upload Your Photo
        </button>
        <input 
          type="file" 
          id="avatarUpload" 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => e.target.files[0] && window.uploadAvatar?.(e.target.files[0])} 
        />
      </div>
      
      {/* Image indicator */}
      <div className="mt-3 text-xs text-gray-500">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Cycling through images every 8 seconds
        </span>
      </div>
    </div>
  );
};

export default Hero;







// import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
// import myPic from '../assets/react-original.svg'; // Import your image
// import android from '../assets/android-original.svg';
// import apple from '../assets/apple-big-logo.png';

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [textIndex, setTextIndex] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const texts = ["React Native Developer", "Full Stack Engineer", "JavaScript Specialist", "UI/UX Enthusiast"];
  
//   // 3D tilt effect values
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
  
//   const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
//     damping: 15,
//     stiffness: 100
//   });
//   const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
//     damping: 15,
//     stiffness: 100
//   });

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     // Text rotation effect
//     const interval = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
    
//     return () => {
//       window.removeEventListener('resize', checkMobile);
//       clearInterval(interval);
//     };
//   }, [texts.length]);

//   const scrollToProjects = () => {
//     const projectsSection = document.getElementById('projects');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div 
//       className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white"
//       ref={ref}
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Scanline overlay */}
//       <div className="fixed inset-0 pointer-events-none z-50 opacity-5" 
//         style={{
//           background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
//         }}
//       />

//       <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
//         {/* Main Content - Centered with larger canvas */}
//         <motion.div 
//           className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24"
//           style={{
//             rotateX: isMobile ? undefined : rotateX,
//             rotateY: isMobile ? undefined : rotateY,
//             transformStyle: 'preserve-3d'
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isInView ? 1 : 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Name and Title - adjusted width for larger canvas */}
//           <motion.div 
//             className="text-center lg:text-right flex-1 max-w-2xl"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.h1 
//               className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800 mb-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7 }}
//             >
//               Lokeswaran
//             </motion.h1>
            
//             <motion.div 
//               className="w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto lg:mx-0 lg:ml-auto mb-4 md:mb-6"
//               initial={{ width: 0 }}
//               animate={{ width: "8rem" }}
//               transition={{ duration: 1, delay: 0.2 }}
//             />
            
//             <motion.div 
//               className="h-12 md:h-16 overflow-hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <motion.p 
//                 key={textIndex}
//                 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -30, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {texts[textIndex]}
//               </motion.p>
//             </motion.div>

//             {/* CTA Button */}
//             <motion.button 
//               className="mt-8 lg:mt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base group relative overflow-hidden cursor-pointer"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={scrollToProjects}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               <span className="relative z-10">View My Work</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </motion.button>
//           </motion.div>

//           {/* Molecule Avatar Component - Now 80% of page width on large screens */}
//           <motion.div 
//             className="flex-1 flex justify-center items-center w-full"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="w-full max-w-4xl mx-auto">
//               <MoleculeAvatar />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//         >
//           <motion.span 
//             className="text-xs md:text-sm mb-3 font-medium text-gray-500"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Scroll to explore
//           </motion.span>
//           <motion.svg
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//             animate={{ y: [0, 8, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <defs>
//               <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#ff00ff" />
//                 <stop offset="100%" stopColor="#00ffff" />
//               </linearGradient>
//             </defs>
//             <path
//               d="M12 4v16m0 0l-6-6m6 6l6-6"
//               stroke="url(#arrowGradient)"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill="none"
//             />
//           </motion.svg>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Optimized MoleculeAvatar Component with React Native Official Colors and Image Cycling
// const MoleculeAvatar = () => {
//   const canvasRef = useRef(null);
//   // Increased base size for 80% page width
//   const BASE_SIZE = 1024;
//   const SIZE = BASE_SIZE;
//   const CX = SIZE/2, CY = SIZE/2, R = SIZE/2 - 8;

//   const mouse = useRef({ x: -9999, y: -9999, active: false, pressed: false });
//   const dotsRef = useRef([]);
//   const animRef = useRef(null);
//   const offCanvas = useRef(document.createElement('canvas'));
//   const cycleTimerRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isUserUploaded, setIsUserUploaded] = useState(false);

//   // Array of all imported images (24 images total)
//   const imageArray = useMemo(() => [
//     myPic,
//     android,
//     apple
//   ], []);

//   // React Native Official Color Palette - Memoized
//   const colorPalette = useMemo(() => ({
//     light: [
//       'rgba(97, 218, 251, 0.9)', // #61DAFB - Primary React Native Blue
//       'rgba(0, 216, 255, 0.9)',  // #00D8FF - Bright Blue
//       'rgba(97, 218, 251, 0.85)',
//       'rgba(120, 225, 255, 0.9)',
//       'rgba(97, 218, 251, 0.95)',
//     ],
//     medium: [
//       'rgba(45, 156, 219, 0.85)',
//       'rgba(32, 35, 42, 0.8)',    // #20232A - React Native Dark
//       'rgba(55, 178, 235, 0.85)',
//       'rgba(67, 186, 245, 0.85)',
//       'rgba(45, 156, 219, 0.9)',
//     ],
//     dark: [
//       'rgba(24, 28, 34, 0.8)',
//       'rgba(97, 218, 251, 0.6)',
//       'rgba(32, 35, 42, 0.9)',
//       'rgba(18, 22, 28, 0.8)',
//       'rgba(45, 156, 219, 0.7)',
//     ]
//   }), []);

//   // Optimized dot builder with React Native color palette
//   const buildDotsFromData = useCallback((imgData) => {
//     const dots = [];
//     const STEP = 10;
//     const radiusSq = R * R;
    
//     for (let y = 0; y < SIZE; y += STEP) {
//       for (let x = 0; x < SIZE; x += STEP) {
//         const dx = x - CX;
//         const dy = y - CY;
//         if (dx*dx + dy*dy > radiusSq) continue;
        
//         const idx = (y * SIZE + x) * 4;
//         const r = imgData.data[idx];
//         const g = imgData.data[idx+1];
//         const b = imgData.data[idx+2];
//         const a = imgData.data[idx+3];
        
//         if (a < 10) continue;
        
//         const bright = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
//         if (bright < 0.04) continue;

//         const dotR = bright * 4.5 + 1.2;
//         const colorIndex = (Math.floor(x / STEP) + Math.floor(y / STEP) + Math.floor(bright * 10)) % 5;
        
//         let col;
//         if (bright > 0.65) {
//           col = colorPalette.light[colorIndex];
//         } else if (bright > 0.35) {
//           col = colorPalette.medium[colorIndex];
//         } else {
//           col = colorPalette.dark[colorIndex];
//         }

//         dots.push({
//           ox: x, oy: y,
//           cx: x, cy: y,
//           vx: 0, vy: 0,
//           r: dotR,
//           col: col,
//           bright: bright,
//           phase: Math.random() * Math.PI * 2,
//         });
//       }
//     }
//     return dots;
//   }, [SIZE, CX, CY, R, colorPalette]);

//   // Optimized fallback builder
//   const buildFallbackDots = useCallback(() => {
//     const off = offCanvas.current;
//     const octx = off.getContext('2d');
//     octx.clearRect(0, 0, SIZE, SIZE);
    
//     const gradient = octx.createRadialGradient(CX, CY, 0, CX, CY, R);
//     gradient.addColorStop(0, '#61DAFB');
//     gradient.addColorStop(0.4, '#00D8FF');
//     gradient.addColorStop(0.7, '#2D9CDB');
//     gradient.addColorStop(1, '#20232A');
    
//     octx.beginPath();
//     octx.arc(CX, CY, R, 0, Math.PI * 2);
//     octx.fillStyle = gradient;
//     octx.fill();
    
//     return buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
//   }, [SIZE, CX, CY, R, buildDotsFromData]);





// // Replace the loadImageFromArray function
// const loadImageFromArray = useCallback((index) => {
//   if (isUserUploaded) return;
  
//   const off = offCanvas.current;
//   const octx = off.getContext('2d');
  
//   const img = new Image();
//   img.crossOrigin = 'anonymous';
//   img.onload = () => {
//     octx.clearRect(0, 0, SIZE, SIZE);
//     octx.save();
//     octx.beginPath();
//     octx.arc(CX, CY, R, 0, Math.PI * 2);
//     octx.clip();
    
//     const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.95;
//     const width = img.width * scale;
//     const height = img.height * scale;
//     const x = CX - width/2;
//     const y = CY - height/2;
    
//     octx.drawImage(img, x, y, width, height);
//     octx.restore();
    
//     const newDots = buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
    
//     // CIRCULAR CAROUSEL ANIMATION
//     newDots.forEach((d, i) => {
//       // Position dots evenly around the circle
//       const angle = (i / newDots.length) * Math.PI * 2;
//       const radius = R * 0.9;
//       d.cx = CX + Math.cos(angle) * radius;
//       d.cy = CY + Math.sin(angle) * radius;
      
//       // Add tangential velocity for rotation effect
//       d.vx = -Math.sin(angle) * 2;
//       d.vy = Math.cos(angle) * 2;
//     });
    
//     dotsRef.current = newDots;
//   };
//   img.src = imageArray[index];
// }, [SIZE, CX, CY, R, buildDotsFromData, isUserUploaded, imageArray]);







//   // Function to cycle to next image - Modified to cycle through ALL images
//   const cycleToNextImage = useCallback(() => {
//     if (isUserUploaded) return;
    
//     setCurrentImageIndex((prevIndex) => {
//       // Calculate next index, wrapping around to 0 when reaching the end
//       const nextIndex = (prevIndex + 1) % imageArray.length;
//       loadImageFromArray(nextIndex);
//       return nextIndex;
//     });
//   }, [imageArray.length, loadImageFromArray, isUserUploaded]);

//   useEffect(() => {
//     offCanvas.current.width = offCanvas.current.height = SIZE;
//     const ctx = canvasRef.current.getContext('2d');
//     if (!ctx) return;

//     // Initialize with fallback
//     dotsRef.current = buildFallbackDots();

//     // Scatter intro animation
//     dotsRef.current.forEach(d => {
//       const angle = Math.random() * Math.PI * 2;
//       const distance = Math.random() * SIZE * 0.9;
//       d.cx = CX + Math.cos(angle) * distance;
//       d.cy = CY + Math.sin(angle) * distance;
//       d.vx = 0;
//       d.vy = 0;
//     });

//     // Load the first image
//     setTimeout(() => {
//       loadImageFromArray(0);
//     }, 100);

//     // Set up 10-second timer to cycle through ALL images
//     cycleTimerRef.current = setInterval(() => {
//       cycleToNextImage();
//     }, 10000); // Changes every 10 seconds

//     // Mouse event handlers
//     let rafId = null;
//     const getPos = (e) => {
//       const rect = canvasRef.current.getBoundingClientRect();
//       const scaleX = SIZE / rect.width;
//       const scaleY = SIZE / rect.height;
      
//       if (e.touches) {
//         return {
//           x: (e.touches[0].clientX - rect.left) * scaleX,
//           y: (e.touches[0].clientY - rect.top) * scaleY
//         };
//       }
//       return {
//         x: (e.clientX - rect.left) * scaleX,
//         y: (e.clientY - rect.top) * scaleY
//       };
//     };

//     const updateMouse = (e) => {
//       if (rafId) cancelAnimationFrame(rafId);
//       rafId = requestAnimationFrame(() => {
//         const p = getPos(e);
//         mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
//         mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
//       });
//     };

//     const handleMove = (e) => { 
//       e.preventDefault?.();
//       mouse.current.active = true; 
//       updateMouse(e); 
//     };
    
//     const handleLeave = () => { 
//       mouse.current.active = false; 
//       mouse.current.pressed = false; 
//       mouse.current.x = -9999; 
//       mouse.current.y = -9999; 
//     };
    
//     const handleDown = (e) => { 
//       e.preventDefault?.();
//       mouse.current.pressed = true; 
//       updateMouse(e); 
//     };
    
//     const handleUp = () => { mouse.current.pressed = false; };
    
//     const handleTouchStart = (e) => { 
//       e.preventDefault(); 
//       mouse.current.active = true; 
//       mouse.current.pressed = true; 
//       updateMouse(e); 
//     };
    
//     const handleTouchMove = (e) => { 
//       e.preventDefault(); 
//       mouse.current.active = true; 
//       updateMouse(e); 
//     };
    
//     const handleTouchEnd = (e) => { 
//       e.preventDefault(); 
//       mouse.current.pressed = false; 
//       mouse.current.active = false; 
//       mouse.current.x = -9999; 
//       mouse.current.y = -9999; 
//     };

//     const canvas = canvasRef.current;
//     canvas.addEventListener('mousemove', handleMove);
//     canvas.addEventListener('mouseleave', handleLeave);
//     canvas.addEventListener('mousedown', handleDown);
//     canvas.addEventListener('mouseup', handleUp);
//     canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
//     canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
//     canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

//     // Animation loop
//     let lastTimestamp = 0;
    
//     const draw = (timestamp) => {
//       if (!lastTimestamp) {
//         lastTimestamp = timestamp;
//         animRef.current = requestAnimationFrame(draw);
//         return;
//       }
      
//       ctx.clearRect(0, 0, SIZE, SIZE);
//       lastTimestamp = timestamp;
      
//       const REPEL_R = mouse.current.pressed ? 140 : 100;
//       const REPEL_F = mouse.current.pressed ? 25 : 15;
//       const ATTRACT_F = 0.1;
//       const DAMPEN = 0.85;

//       const dots = dotsRef.current;
//       const mouseX = mouse.current.x;
//       const mouseY = mouse.current.y;
//       const mouseActive = mouse.current.active;
//       const mousePressed = mouse.current.pressed;

//       for (let i = 0; i < dots.length; i++) {
//         const d = dots[i];
        
//         const dx = d.ox - d.cx;
//         const dy = d.oy - d.cy;
//         let ax = dx * ATTRACT_F;
//         let ay = dy * ATTRACT_F;

//         if (mouseActive) {
//           const mdx = d.cx - mouseX;
//           const mdy = d.cy - mouseY;
//           const distSq = mdx*mdx + mdy*mdy;
//           const dist = Math.sqrt(distSq) || 0.001;
          
//           if (dist < REPEL_R) {
//             const strength = (1 - dist/REPEL_R) * REPEL_F;
//             const normX = mdx / dist;
//             const normY = mdy / dist;
//             ax += normX * strength;
//             ay += normY * strength;
            
//             if (mousePressed) {
//               ax += (Math.random() - 0.5) * strength * 0.4;
//               ay += (Math.random() - 0.5) * strength * 0.4;
//             }
//           }
//         }

//         d.vx = (d.vx + ax) * DAMPEN;
//         d.vy = (d.vy + ay) * DAMPEN;
//         d.cx += d.vx;
//         d.cy += d.vy;

//         if (!mouseActive) {
//           d.cx += Math.sin(timestamp * 0.0015 + d.phase) * 0.4;
//           d.cy += Math.cos(timestamp * 0.0015 + d.phase) * 0.4;
//         }

//         ctx.beginPath();
//         ctx.arc(d.cx, d.cy, d.r, 0, Math.PI * 2);
//         ctx.fillStyle = d.col;
        
//         if (mouseActive && Math.hypot(d.cx - mouseX, d.cy - mouseY) < REPEL_R) {
//           ctx.shadowBlur = 20;
//           ctx.shadowColor = 'rgba(97, 218, 251, 0.7)';
//         } else {
//           ctx.shadowBlur = 12;
//           ctx.shadowColor = 'rgba(97, 218, 251, 0.4)';
//         }
        
//         ctx.fill();
//         ctx.shadowBlur = 0;
//       }

//       animRef.current = requestAnimationFrame(draw);
//     };

//     animRef.current = requestAnimationFrame(draw);

//     // Image upload handler
//     window.uploadAvatar = (file) => {
//       if (!file) return;
//       setIsUserUploaded(true);
      
//       const reader = new FileReader();
//       reader.onload = (ev) => {
//         const img = new Image();
//         img.crossOrigin = 'anonymous';
//         img.onload = () => {
//           const off = offCanvas.current;
//           const octx = off.getContext('2d');
//           octx.clearRect(0, 0, SIZE, SIZE);
//           octx.save();
//           octx.beginPath();
//           octx.arc(CX, CY, R, 0, Math.PI * 2);
//           octx.clip();
          
//           const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.95;
//           const width = img.width * scale;
//           const height = img.height * scale;
//           const x = CX - width/2;
//           const y = CY - height/2;
          
//           octx.drawImage(img, x, y, width, height);
//           octx.restore();
          
//           const newDots = buildDotsFromData(octx.getImageData(0, 0, SIZE, SIZE));
          
//           newDots.forEach(d => {
//             const angle = Math.random() * Math.PI * 2;
//             const distance = Math.random() * SIZE * 0.9;
//             d.cx = CX + Math.cos(angle) * distance;
//             d.cy = CY + Math.sin(angle) * distance;
//             d.vx = 0;
//             d.vy = 0;
//           });
          
//           dotsRef.current = newDots;
//         };
//         img.src = ev.target.result;
//       };
//       reader.readAsDataURL(file);
//     };

//     return () => {
//       if (animRef.current) {
//         cancelAnimationFrame(animRef.current);
//       }
//       if (rafId) {
//         cancelAnimationFrame(rafId);
//       }
//       if (cycleTimerRef.current) {
//         clearInterval(cycleTimerRef.current);
//       }
//       canvas.removeEventListener('mousemove', handleMove);
//       canvas.removeEventListener('mouseleave', handleLeave);
//       canvas.removeEventListener('mousedown', handleDown);
//       canvas.removeEventListener('mouseup', handleUp);
//       canvas.removeEventListener('touchstart', handleTouchStart);
//       canvas.removeEventListener('touchmove', handleTouchMove);
//       canvas.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [buildFallbackDots, buildDotsFromData, loadImageFromArray, cycleToNextImage, SIZE, CX, CY, R]);

//   return (
//     <div className="relative flex flex-col items-center w-full">
//       <canvas 
//         ref={canvasRef} 
//         width={SIZE} 
//         height={SIZE} 
// className="rounded-xl border border-cyan-400/30 cursor-crosshair relative z-10 w-full h-auto"       
//  style={{
//           filter: 'drop-shadow(0 0 25px rgba(97, 218, 251, 0.4))',
//           transition: 'filter 0.3s ease',
//           background: 'transparent',
//           maxWidth: '80vw',
//           width: '70%',
//           height: 'auto',
//           aspectRatio: '1/1',
//           margin: '0 auto'
//         }}
//       />
      
//       <div className="mt-6 flex gap-3">
//         <button 
//           onClick={() => document.getElementById('avatarUpload')?.click()} 
//           className="bg-transparent border border-[#61DAFB]/50 text-[#61DAFB] px-6 py-2 text-sm uppercase tracking-widest hover:border-[#61DAFB] hover:text-[#00D8FF] transition-all rounded-full backdrop-blur-sm"
//         >
//          ⬡ Click & Have Fun
//         </button>
//         <input 
//           type="file" 
//           id="avatarUpload" 
//           accept="image/*" 
//           className="hidden" 
//           onChange={(e) => e.target.files[0] && window.uploadAvatar?.(e.target.files[0])} 
//         />
//       </div>
      
//     </div>
//   );
// };

// export default Hero;
