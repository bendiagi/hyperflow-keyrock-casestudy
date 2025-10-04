import React, { useRef } from 'react';
import './UserPersona.css';

const UserPersona = () => {
  const personas = [
    { src: 'https://res.cloudinary.com/djnkxndun/image/upload/v1756294169/Lucas_rv99tf.svg', alt: 'Lucas Persona' },
    { src: 'https://res.cloudinary.com/djnkxndun/image/upload/v1756294170/Aisha_gtc1fg.svg', alt: 'Aisha Persona' },
    { src: 'https://res.cloudinary.com/djnkxndun/image/upload/v1756294170/David_jslq0o.svg', alt: 'David Persona' }
  ];

  const looped = [...personas, ...personas];

  const viewportRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = viewportRef.current;
    if (!el) return;
    const amount = Math.max(300, Math.min(el.clientWidth * 0.6, 800));
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="user-persona-section">
      <div className="section-header">
        <h2 className="section-title cursor-hover-target">User Personas</h2>
        <p className="section-subtitle">
          Who our everyday users really are.
        </p>
      </div>
      <div className="personas-container">
        <div className="personas-viewport" ref={viewportRef}>
          <div className="personas-carousel">
            {looped.map((persona, index) => (
              <div key={index} className="persona-card">
                <img src={persona.src} alt={persona.alt} className="persona-image" />
              </div>
            ))}
          </div>
        </div>
        {/* Nav arrows - placed outside scroll area so they don't move */}
        <button
          type="button"
          aria-label="Previous persona"
          className="nav-arrow nav-arrow-left"
          onClick={() => scrollByAmount('left')}
        >
          &#8592;
        </button>
        <button
          type="button"
          aria-label="Next persona"
          className="nav-arrow nav-arrow-right"
          onClick={() => scrollByAmount('right')}
        >
          &#8594;
        </button>
      </div>
      
      <div className="figma-link-container">
        <a 
          href="https://www.figma.com/community/file/1214669066039788206/user-personas-5-free-templates" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="figma-link"
        >
          Check out my User Persona templates on Figma Community. ↗
        </a>
      </div>
    </div>
  );
};

export default UserPersona;
