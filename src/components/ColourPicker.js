import React, { useState } from "react";
import styles from "../styles/ColourPicker.module.css";
import { SketchPicker } from "react-color";

export default function ColourPicker(props) {
  const [pickedColour, setPickedColour] = useState(props.colour);

  return (
    <SketchPicker
      className={styles.colourPicker}
      color={pickedColour}
      onChangeComplete={(color) => {
        setPickedColour(color.hex);
        props.handleChange(color.hex);
      }}
    />
  );
}
