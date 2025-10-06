import React from 'react';
import './styles.css';

const BuildVsBuy: React.FC = () => {
  return (
    <section className="bvb-section" aria-label="Build vs Buy">
      <div className="bvb-overlap-wrapper">
        <div className="bvb-intro-card" style={{ background: "url('/cards-bg-3-1.jpg') center/cover no-repeat" }}>
          <span className="bvb-intro-tag">Build vs Buy Analysis</span>
          <h2 className="bvb-intro-title">A Strategic Evaluation of Control, Cost, and Customization</h2>
        </div>
      </div>
    </section>
  );
};

export default BuildVsBuy;


