import React, { useState } from "react";
import styles from "../styles/ColourBox.module.css";
import decideColour from "../lib/decideColour";

export default function ColourBox(props) {
  const [copied, setCopied] = useState(false);

  const colourValue = decideColour(props.hex);

  const boxStyle = {
    backgroundColor: "#" + props.hex,
    color: colourValue,
  };

  function copy(event) {
    event.preventDefault();
    if (!copied) {
      const hexValue = event.target.innerHTML;
      navigator.clipboard.writeText(hexValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  }

  return (
    <div className={"col mx-0 " + `${styles.colourBox}`} style={boxStyle}>
      <p onClick={copy}>{copied ? "Copied!" : "#" + props.hex.toUpperCase()}</p>
    </div>
  );
}
