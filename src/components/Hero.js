import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import myPic from '../assets/react-original.svg';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const texts = useMemo(() => ["React Native Developer", "Full Stack Engineer", "JavaScript Specialist", "UI/UX Enthusiast"], []);
  
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
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white"
      ref={ref}
    >
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
              <MoleculeAvatar isMobile={isMobile} />
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
    </div>
  );
};

// Optimized MoleculeAvatar Component
const MoleculeAvatar = React.memo(({ isMobile }) => {
  const canvasRef = useRef(null);
  const SIZE = isMobile ? 300 : 500;
  const CX = SIZE/2, CY = SIZE/2, R = SIZE/2 - 8;

  const mouse = useRef({ x: -9999, y: -9999, active: false, pressed: false });
  const dotsRef = useRef([]);
  const animRef = useRef(null);
  const offCanvas = useRef(null);

  // Initialize offscreen canvas once
  useEffect(() => {
    offCanvas.current = document.createElement('canvas');
    offCanvas.current.width = offCanvas.current.height = SIZE;
  }, [SIZE]);

  const getDotColor = useCallback((brightness) => {
    if (brightness > 0.7) {
      return `rgba(97, 218, 251, ${0.7 + brightness * 0.3})`;
    } else if (brightness > 0.4) {
      return `rgba(45, 156, 219, ${0.6 + brightness * 0.3})`;
    } else {
      return `rgba(32, 35, 42, ${0.5 + brightness * 0.3})`;
    }
  }, []);

  const buildDotsFromImage = useCallback((imgData) => {
    const dots = [];
    const STEP = isMobile ? 10 : 8;
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
        
        if (a < 50) continue;
        
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        if (brightness < 0.1) continue;
        
        const dotSize = Math.max(1.5, brightness * 4);
        const color = getDotColor(brightness);
        
        dots.push({
          ox: x, oy: y,
          cx: x, cy: y,
          vx: 0, vy: 0,
          r: dotSize,
          col: color,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    return dots;
  }, [SIZE, CX, CY, R, getDotColor, isMobile]);

  const createFallbackDots = useCallback(() => {
    const off = offCanvas.current;
    if (!off) return;
    const octx = off.getContext('2d');
    if (!octx) return;

    octx.clearRect(0, 0, SIZE, SIZE);
    const gradient = octx.createRadialGradient(CX, CY, 0, CX, CY, R);
    gradient.addColorStop(0, '#61DAFB');
    gradient.addColorStop(0.5, '#00D8FF');
    gradient.addColorStop(1, '#20232A');

    octx.beginPath();
    octx.arc(CX, CY, R, 0, Math.PI * 2);
    octx.fillStyle = gradient;
    octx.fill();

    const imgData = octx.getImageData(0, 0, SIZE, SIZE);
    dotsRef.current = buildDotsFromImage(imgData);
  }, [SIZE, CX, CY, R, buildDotsFromImage]);

  const loadImage = useCallback(() => {
    const off = offCanvas.current;
    if (!off) return;
    const octx = off.getContext('2d');
    if (!octx) return;
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      octx.clearRect(0, 0, SIZE, SIZE);
      octx.save();
      octx.beginPath();
      octx.arc(CX, CY, R, 0, Math.PI * 2);
      octx.clip();
      
      const scale = Math.min(R * 2 / img.width, R * 2 / img.height) * 0.9;
      const width = img.width * scale;
      const height = img.height * scale;
      octx.drawImage(img, CX - width/2, CY - height/2, width, height);
      octx.restore();
      
      const imgData = octx.getImageData(0, 0, SIZE, SIZE);
      const newDots = buildDotsFromImage(imgData);
      
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
      createFallbackDots();
    };
    
    img.src = myPic;
  }, [SIZE, CX, CY, R, buildDotsFromImage, createFallbackDots]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    loadImage();

    // Mouse/touch event handlers
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
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

    const handleMove = (e) => { 
      e.preventDefault?.();
      mouse.current.active = true; 
      const p = getPos(e);
      mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
      mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
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
      const p = getPos(e);
      mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
      mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
    };
    
    const handleUp = () => { mouse.current.pressed = false; };
    
    const handleTouchStart = (e) => { 
      e.preventDefault(); 
      mouse.current.active = true; 
      mouse.current.pressed = true; 
      const p = getPos(e);
      mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
      mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
    };
    
    const handleTouchMove = (e) => { 
      e.preventDefault(); 
      mouse.current.active = true; 
      const p = getPos(e);
      mouse.current.x = Math.max(0, Math.min(SIZE, p.x));
      mouse.current.y = Math.max(0, Math.min(SIZE, p.y));
    };
    
    const handleTouchEnd = () => { 
      mouse.current.pressed = false; 
      mouse.current.active = false; 
      mouse.current.x = -9999; 
      mouse.current.y = -9999; 
    };

    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Animation loop - optimized
    const REPEL_R = 80;
    const REPEL_F = 12;
    const ATTRACT_F = 0.08;
    const DAMPEN = 0.88;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      
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
            ax += (mdx / dist) * strength;
            ay += (mdy / dist) * strength;
            
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

        // Draw dot
        ctx.beginPath();
        ctx.arc(d.cx, d.cy, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.col;
        ctx.fill();
      }
      
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [loadImage, SIZE, CX, CY, R]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <canvas 
        ref={canvasRef} 
        width={SIZE} 
        height={SIZE} 
        className="rounded-xl cursor-crosshair relative z-10 w-full h-auto"       
        style={{
          filter: 'drop-shadow(0 0 20px rgba(97, 218, 251, 0.3))',
          background: 'transparent',
          maxWidth: '80vw',
          width: '70%',
          height: 'auto',
          aspectRatio: '1/1',
          margin: '0 auto'
        }}
      />
    </div>
  );
});

export default Hero;