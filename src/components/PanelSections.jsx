import React from "react";
import data from "../services/frogs.json";
import ExpansionPanel from "./ExpansionPanels";

function FrogsLife() {
  return (
    <div>
      {data.sections.map((x) => (
        <div key={x.title.value}>
          <ExpansionPanel title={x.title.value}>
            <p className="text-left">{x.panel.value}.</p>
            <img src={x.panel.image.src} alt="" />
          </ExpansionPanel>
        </div>
      ))}
    </div>
  );
}

export default FrogsLife;
