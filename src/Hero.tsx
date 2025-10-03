import React from 'react';
import './styles.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "Automated Crypto Market Data Pipeline",
  subtitle = "A hands-on proof of concept showing how real-time crypto data can be transformed into actionable insights with anomaly detection and LLM-powered analysis.",
  description = "",
  primaryButtonText = "View Demo",
  secondaryButtonText = "View GitHub",
  onPrimaryClick,
  onSecondaryClick
}) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      console.log('Primary button clicked!');
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      console.log('Secondary button clicked!');
    }
  };

  return (
    <section className="hero">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
      >
        <source src="https://res.cloudinary.com/djnkxndun/video/upload/v1759523765/home-blue_vxpa78.mp4" type="video/mp4" />
      </video>
      <a href="#" className="logo">HyperFlow</a>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">Case Study by Ben Diagi</div>
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={handlePrimaryClick}
              type="button"
            >
              {primaryButtonText}
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleSecondaryClick}
              type="button"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
