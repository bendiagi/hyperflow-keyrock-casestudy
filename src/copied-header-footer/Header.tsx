import React, { useState, useEffect } from "react";
import "./Header.css";

interface HeaderProps {
  activePage: 'home' | 'about' | 'writing';
}

const Header = ({ activePage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const getLinkStyle = (page: 'home' | 'about' | 'writing') => {
    const isActive = activePage === page;
    return isActive 
      ? "text-[#3266D0] font-medium hover:text-[#2855B8] transition-colors"
      : "text-muted-foreground hover:text-[#3266D0] transition-colors";
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ben_Diagi_CV.pdf';
    link.download = 'Ben_Diagi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
      <nav className="nav-container">
        <a href="https://www.bendiagi.com/" className="brand" target="_blank" rel="noopener noreferrer">
          <span className="brand-name">BEN DIAGI</span>
          <span className="brand-title">PRODUCT MANAGER</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <a href="https://www.bendiagi.com/" target="_blank" rel="noopener noreferrer" className={getLinkStyle('home')}>WORK</a>
          <a href="https://www.bendiagi.com/about" target="_blank" rel="noopener noreferrer" className={getLinkStyle('about')}>ABOUT</a>
          <a href="https://www.bendiagi.com/writing" target="_blank" rel="noopener noreferrer" className={getLinkStyle('writing')}>WRITING</a>
          <button 
            onClick={handleResumeDownload}
            className="resume-button"
          >
            RESUME
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button"
          aria-label="Toggle mobile menu"
        >
          {/* Hamburger Icon - Morphs to X */}
          <span 
            className={`hamburger-line ${
              isMobileMenuOpen ? 'hamburger-line-active' : ''
            }`}
          />
          <span 
            className={`hamburger-line hamburger-line-second ${
              isMobileMenuOpen ? 'hamburger-line-active-second' : ''
            }`}
          />
        </button>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`mobile-menu-dropdown ${
            isMobileMenuOpen ? 'mobile-menu-open' : ''
          }`}
        >
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <a 
                href="https://www.bendiagi.com/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-nav-link ${getLinkStyle('home')}`}
              >
                WORK
              </a>
              <a 
                href="https://www.bendiagi.com/about" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-nav-link ${getLinkStyle('about')}`}
              >
                ABOUT
              </a>
              <a 
                href="https://www.bendiagi.com/writing" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-nav-link ${getLinkStyle('writing')}`}
              >
                WRITING
              </a>
              <button 
                onClick={() => {
                  handleResumeDownload();
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-resume-button"
              >
                RESUME
              </button>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
