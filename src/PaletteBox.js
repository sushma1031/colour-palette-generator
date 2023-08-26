import React from "react";
import styles from "./styles/PaletteBox.module.css";
import ColourBox from "./components/ColourBox";

export default function PaletteBox(props) {
  return (
    <div
      id="palette"
      className={
        "mx-lg-auto mb-3 mt-lg-5" +
        ` ${styles.paletteBox}`
      }
    >
      {props.coloursList.map((colour, index) => {
        return <ColourBox key={index} hex={colour.hex} rgb = {colour.rgb} />;
      })}
    </div>
  );
}
