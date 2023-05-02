import React from "react";
import data from "../services/frogs.json";
// import "../src/assets/styles/panel.scss"
import ExpansionPanel from "./ExpansionPanels";

function FrogsLife() {
  return (
    <div>
      {data.sections.map((x) => (
        <div key={x.title.value}>
          <ExpansionPanel title={x.title.value}>
          <div className="content-columns">
          <div className="column">
          <p className="text-left">{x.panel.value}.</p>
          </div>
          <div className="column">
          <img src={x.panel.image.src} alt="" />
          </div>
        </div>
          </ExpansionPanel>
        </div>
      ))}
    </div>
  );
}

export default FrogsLife;
