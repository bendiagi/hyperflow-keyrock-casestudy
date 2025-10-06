import React from 'react';
import './styles.css';

const FlowDiagram: React.FC = () => {
  return (
    <section className="flow-diagram">
      <div className="flow-diagram-content">
        <div className="flow-diagram-header">
          <h2 className="flow-diagram-title">Flow Diagram</h2>
          <p className="flow-diagram-subtitle">
            Visual representation of the data flow and system architecture
          </p>
        </div>
        
        <div className="flow-diagram-container">
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/board/dieT7NEHtdlHscguoQ0jT8/KeyRock-Flow-Diagram?node-id=0-1&embed-host=share" 
            allowFullScreen
            title="KeyRock Flow Diagram"
          />
        </div>
      </div>
    </section>
  );
};

export default FlowDiagram;
