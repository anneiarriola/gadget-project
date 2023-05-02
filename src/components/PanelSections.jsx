import React from "react";
import data from "../services/frogs.json";
import ExpansionPanel from "./ExpansionPanels";

function FrogsLife() {
  return (
    <div>
      {data.sections.map((x) => (
        <div key={x.title.value}>
          <ExpansionPanel title={x.title.value}>
          <div className="content-columns">
          <div className="column">
          <p className="text-subject">{x.panel.value}</p>
          </div>
          <div className="column">
          <img src={x.panel.image.src} className="image-panel" alt={x.panel.image.title} />
          </div>
        </div>
          </ExpansionPanel>
        </div>
      ))}
    </div>
  );
}

export default FrogsLife;
