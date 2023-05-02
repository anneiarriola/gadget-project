import React, { useState } from "react";
import "../assets/styles/panel.scss";
function ExpansionPanel({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expansion-panel">
      <div
        className="panel-header"
        onClick={togglePanel}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePanel();
          }
        }}
        aria-expanded={expanded}
        tabIndex="0"
      >
        <h1 className="panel-title">{title}</h1>
        <span className={`arrow-icon ${expanded ? "expanded" : "bottom"}`} />
      </div>
      <div
        className={`expansion-panel--body ${
          expanded ? "expansion-panel--body--expanded" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ExpansionPanel;
