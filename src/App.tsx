import React from 'react';
import Hero from './Hero';
import Challenge from './Challenge';
import UserPersona from './UserPersona';
import Solutions from './Solutions';
import FlowDiagram from './FlowDiagram';
import BuildVsBuy from './BuildVsBuy';
import BuildVsBuyContent from './BuildVsBuyContent';
import Conclusion from './Conclusion';
import Header from './copied-header-footer/Header';

const App: React.FC = () => {
  const handleGetStarted = () => {
    window.open('https://hyperflow-keyrock-production.up.railway.app/', '_blank', 'noopener');
  };

  const handleLearnMore = () => {
    window.open('https://github.com/bendiagi/hyperflow-keyrock', '_blank', 'noopener');
  };

  return (
    <div className="App">
      <Header activePage={'home'} />
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
      <Conclusion />
    </div>
  );
};

export default App;
