import React from 'react';
import Hero from './Hero';

const App: React.FC = () => {
  const handleGetStarted = () => {
    alert('Welcome! Let\'s get started with your journey.');
  };

  const handleLearnMore = () => {
    alert('Learn more about our amazing features and capabilities.');
  };

  return (
    <div className="App">
      <Hero
        title="Automated Crypto Market Data Pipeline"
        subtitle="A hands-on proof of concept showing how real-time crypto data can be transformed into actionable insights with anomaly detection and LLM-powered analysis."
        primaryButtonText="View Demo"
        secondaryButtonText="View GitHub"
        onPrimaryClick={handleGetStarted}
        onSecondaryClick={handleLearnMore}
      />
    </div>
  );
};

export default App;
