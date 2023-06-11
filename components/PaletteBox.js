import React from "react";
import styles from "../styles/PaletteBox.module.css";
import ColourBox from "./ColourBox";

export default function PaletteBox(props) {
  return (
    <div
      id="palette"
      className={
        "mx-lg-auto mb-2" +
        (props.error ? " mt-lg-3" : " mt-lg-5") +
        ` ${styles.paletteBox}`
      }
    >
      {props.coloursList.map((colour, index) => {
        return <ColourBox key={index} hex={colour.hex} rgb = {colour.rgb} />;
      })}
    </div>
  );
}
