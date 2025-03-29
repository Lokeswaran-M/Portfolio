import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero grainy-gradient-intro">
      <div className="hero-content">
        <h1>Hi there, I'm Lokeswaran...</h1>
        <h2 className="heroh2">I'm A Mobile App & Web Developer</h2>
      </div>
      <div className="hero-word">
        <p> 
          "I love designing digital experiences that gently flow into your everyday life — 
          calm, intuitive, and touched with a little magic."
        </p> 
      </div>
    </section>
  );
};

export default Hero;
