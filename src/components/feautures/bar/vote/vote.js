import React, { useState } from "react";
import "./vote.css";

export default function Vote() {
  //simple colored button that remember my choice without authentification

  const [pressGreen, setPressGreen] = useState(false);
  const [pressRed, setPressRed] = useState(false);

  const redColor = pressRed ? "redColor" : "";
  const greenColor = pressGreen ? "greenColor" : "";

  const handleChangingColorGreen = () => {
    if (!pressRed) {
      setPressGreen(!pressGreen);
    } else {
      setPressRed(!pressRed);
      setPressGreen(!pressGreen);
    }
  };

  const handleChangingColorRed = () => {
    if (!pressGreen) {
      setPressRed(!pressRed);
    } else {
      setPressGreen(!pressGreen);
      setPressRed(!pressRed);
    }
  };
  return (
    <div className="votes">
      <span
        className={`material-symbols-outlined thumb ${greenColor}`}
        onClick={handleChangingColorGreen}
      >
        thumb_up
      </span>
      <span className={`material-symbols-outlined thumb ${redColor}`} onClick={handleChangingColorRed}>
        thumb_down
      </span>
    </div>
  );
}
