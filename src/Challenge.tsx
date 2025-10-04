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
            <div className="challenge-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759526233/stock-market-forex-trading-graph-futuristic_aemvco.jpg" alt="Stock market trading graph" className="challenge-card-image" />
            </div>
            <div className="challenge-card-content">
              <h4 className="challenge-card-title">Overwhelming Data Volume</h4>
              <p className="challenge-card-description">
                Exchanges produce high-frequency OHLCV data streams that are difficult to process and interpret in real-time.
              </p>
            </div>
          </div>
          
          <div className="challenge-card">
            <div className="challenge-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759526232/no-glitches-this-code-shot-happy-computer-programmer-working-new-software-his-computer_iylqet.jpg" alt="Programmer working on computer" className="challenge-card-image" />
            </div>
            <div className="challenge-card-content">
              <h4 className="challenge-card-title">Limited Visibility</h4>
              <p className="challenge-card-description">
                Risk, compliance, and operations teams need anomaly visibility but often rely on traders or engineers to access insights.
              </p>
            </div>
          </div>
          
          <div className="challenge-card">
            <div className="challenge-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759526281/left-right-road-sign-road-2-2_rjt0fo.jpg" alt="Road sign showing left and right directions" className="challenge-card-image" />
            </div>
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
