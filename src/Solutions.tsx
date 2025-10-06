import React from 'react';
import './styles.css';

const Solutions: React.FC = () => {
  return (
    <section className="solutions">
      <div className="solutions-content">
        <div className="solutions-header">
          <h3 className="solutions-subtitle">Solution: From Chaos to Clarity</h3>
          <h2 className="solutions-title">
            Building a Crypto Data Platform That Transforms Raw Market Noise into Structured Intelligence, Real-Time Anomaly Detection, and AI-Powered Insights
          </h2>
        </div>
        
        <div className="solutions-cards">
          <div className="solutions-card">
            <div className="solutions-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759739997/pipeline_i4xyu8.png" alt="Automated ETL Pipeline" className="solutions-card-image" />
            </div>
            <div className="solutions-card-content">
              <h4 className="solutions-card-title">Automated ETL Pipeline</h4>
              <p className="solutions-card-description">
                Seamlessly ingests OHLC data from CoinGecko, normalizes it, and stores it in a structured, query-ready database—removing manual bottlenecks.
              </p>
            </div>
          </div>
          
          <div className="solutions-card">
            <div className="solutions-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759739996/magnifying_l0obic.png" alt="Anomaly Detection Engine" className="solutions-card-image" />
            </div>
            <div className="solutions-card-content">
              <h4 className="solutions-card-title">Anomaly Detection Engine</h4>
              <p className="solutions-card-description">
                Surfaces hidden risks by automatically flagging unusual volumes, sudden volatility spikes, abnormal spreads, and price breaks—giving teams a clear signal in the noise.
              </p>
            </div>
          </div>
          
          <div className="solutions-card">
            <div className="solutions-card-image-container">
              <img src="https://res.cloudinary.com/djnkxndun/image/upload/v1759739996/ai-bot_wxrhrl.png" alt="LLM-Powered Insights" className="solutions-card-image" />
            </div>
            <div className="solutions-card-content">
              <h4 className="solutions-card-title">LLM-Powered Insights</h4>
              <p className="solutions-card-description">
                Transforms complex data into natural language. Risk and research teams can explore market summaries, ask questions, and get instant, AI-driven answers powered by GPT APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

