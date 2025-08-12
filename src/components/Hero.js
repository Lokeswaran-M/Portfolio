import React from "react";
import "../styles/Hero.css";
import faceImage from "../assets/My Pic.png"; // Replace with your processed face image

const Hero = () => {
  return (
    <section className="hero-split">
      {/* Left Side - Designer */}
      <div className="hero-side designer-side">
        <div className="hero-text">
          <h1 className="designer-title">designer<span>❤</span></h1>
          <p>
            UI/UX Designer with a passion for designing beautiful and functional
            user experiences. Minimalist who believes less is more.
          </p>
        </div>
      </div>

      {/* Middle Image */}
      <div className="hero-image">
        <img src={faceImage} alt="Profile" />
      </div>

      {/* Right Side - Coder */}
      <div className="hero-side coder-side">
        <div className="hero-text">
          <h1 className="coder-title">&lt;coder&gt;</h1>
          <p>
            Front End Developer who focuses on writing clean, elegant, and
            efficient code. Love HTML, CSS, WordPress, and a touch of jQuery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
