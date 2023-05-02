import React from "react";
import data from "../services/frogs.json";
import ExpansionPanel from "./ExpansionPanels";
// import image from '../assets/image/frog-lifecycle-1.jpg'

function FrogsLife() {
  return (
    <div>
      {data.sections.map((x) => (
        <div key={x.title.value}>
          <ExpansionPanel title={x.title.value}>
            <p className="text-left">{x.panel.value}.</p>
            <img src={x.panel.image.src} alt="" />
          </ExpansionPanel>
            {/* <img src='/image/frog-lifecycle-1.jpg' alt="" /> */}
        </div>
      ))}
    </div>
  );
}

export default FrogsLife;
