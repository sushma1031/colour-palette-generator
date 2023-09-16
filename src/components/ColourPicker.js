import React, { useState } from "react";
import styles from "../styles/ColourPicker.module.css";
import { SketchPicker } from "react-color";

export default function ColourPicker(props) {
  const [pickedColour, setPickedColour] = useState(props.colour);
  const name = props.index ? "secondary" : "primary";
  return (
    <SketchPicker
      key={props.index}
      disableAlpha={true}
      className={`${styles.picker} ${styles[name]}`}
      color={pickedColour}
      onChangeComplete={(color) => {
        setPickedColour(color.hex);
        props.handleChange(color.hex);
      }}
    />
  );
}
