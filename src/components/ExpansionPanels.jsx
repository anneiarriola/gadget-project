import React, { useState } from 'react';
import '../assets/styles/panel.scss'
function ExpansionPanel({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expansion-panel">
      <div className="expansion-panel__header" onClick={togglePanel}>
        {title}
      </div>
      <div
        className={`expansion-panel__body ${
          expanded ? 'expansion-panel__body--expanded' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ExpansionPanel;
