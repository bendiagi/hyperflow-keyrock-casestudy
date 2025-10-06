import React from 'react';
import Hero from './Hero';
import Challenge from './Challenge';
import UserPersona from './UserPersona';
import Solutions from './Solutions';
import FlowDiagram from './FlowDiagram';
import BuildVsBuy from './BuildVsBuy';
import BuildVsBuyContent from './BuildVsBuyContent';

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
      <Challenge />
      <UserPersona />
      <Solutions />
      <FlowDiagram />
      <BuildVsBuy />
      <BuildVsBuyContent />
    </div>
  );
};

export default App;
