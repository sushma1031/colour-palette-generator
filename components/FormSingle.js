import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import InputBar from "./InputBar";
import IconButton from "@mui/material/IconButton";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import { testHexColour } from "../lib/colourUtils"

export default function Form(props) {
  const [error, setError] = useState(false);
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleColourInput(colInput) {
    setColour(colInput);
    if (error) {
      if (testHexColour(colInput))
        setError(false);
    }
  }

  function toggleColourPicker(event) {
    event.preventDefault();
    setShowColourPicker(!showColourPicker);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowColourPicker(false);
    if (testHexColour(colour)) {
      setError(false);
      props.createPalette(colour);
    } else {
      setError(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`col-xl-4 mx-auto ${styles.layout}`}
    >
      <InputBar
        index={0}
        placeholder="#F35969"
        name="hex-colour"
        value={colour}
        error={error}
        onChange={handleColourInput}
        showColourPicker={showColourPicker}
        toggleColourPicker={toggleColourPicker}
      />
      <div
        className={`${styles.buttonStyle}`}
      >
        <IconButton
          type="submit"
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
          aria-label="generate colour palette"
          size="medium"
          disableRipple
        >
          <AutoFixNormalIcon sx={{ color: "#2c2c2c" }} fontSize="inherit" />
        </IconButton>
      </div>
      <div className={`${styles.break}`}></div>
      {error && (
        <div id="colourHelp" className={`form-text ${styles.smallText}`}>
          Please enter a valid HEX colour code.
        </div>
      )}
    </form>
  );
}