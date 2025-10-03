import React from 'react';
import './styles.css';

const Challenge: React.FC = () => {
  return (
    <section className="challenge">
      <div className="challenge-content">
        <div className="challenge-header">
          <h3 className="challenge-subtitle">The Data Dilemma in Crypto Market Operations</h3>
          <h2 className="challenge-title">
            Keyrock operates across 80+ exchanges, generating millions of time-series data points daily. For non-trading teams, extracting meaningful insights from this flood of data is a constant challenge.
          </h2>
        </div>
        
        <div className="challenge-cards">
          <div className="challenge-card">
            <div className="challenge-card-number">1</div>
            <div className="challenge-card-content">
              <h4 className="challenge-card-title">Overwhelming Data Volume</h4>
              <p className="challenge-card-description">
                Exchanges produce high-frequency OHLCV data streams that are difficult to process and interpret in real-time.
              </p>
            </div>
          </div>
          
          <div className="challenge-card">
            <div className="challenge-card-number">2</div>
            <div className="challenge-card-content">
              <h4 className="challenge-card-title">Limited Accessibility for Non-Trading Teams</h4>
              <p className="challenge-card-description">
                Risk, compliance, and operations teams need anomaly visibility but often rely on traders or engineers to access insights.
              </p>
            </div>
          </div>
          
          <div className="challenge-card">
            <div className="challenge-card-number">3</div>
            <div className="challenge-card-content">
              <h4 className="challenge-card-title">Build vs. Buy Tradeoff</h4>
              <p className="challenge-card-description">
                Off-the-shelf SaaS tools are expensive and generic, while in-house solutions require resources—posing the critical question: Should we build or buy?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
