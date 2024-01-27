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
    <div>
      <button
        className={`bar ${greenColor}`}
        onClick={handleChangingColorGreen}
      >
        Up
      </button>
      <button className={`bar ${redColor}`} onClick={handleChangingColorRed}>
        DOWN
      </button>
    </div>
  );
}
