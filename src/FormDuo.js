import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { testHexColour } from "../lib/colourUtils";
import InputBar from "./components/InputBar";
import styles from "./styles/Form.module.css";

export default function Form(props) {
  const [error, setError] = useState([false, false]);
  const [colours, setColours] = useState(["", ""]);
  const [showColourPicker, setShowColourPicker] = useState([false, false]);

  const hasError = error.some((err) => err);

  function handleColourInput(colInput, index) {
    setColours((prev) => [
      ...prev.slice(0, index),
      colInput,
      ...prev.slice(index + 1),
    ]);
    if (error[index]) {
      if (testHexColour(colInput)) changeError(false, index);
    }
  }

  const changeError = (error, index) => {
    setError((prev) => [
      ...prev.slice(0, index),
      error,
      ...prev.slice(index + 1),
    ]);
  }

  function toggleColourPicker(index) {
    setShowColourPicker((prev) => {
      const newPicker = [...prev];
      newPicker[index] = !(prev[index]);
      return newPicker;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowColourPicker([false, false]);
    if (colours.every(testHexColour)) {
      setError([false, false]);
      props.createPalette(colours);
    } else {
      colours.forEach((colour, index) => {
        if (!testHexColour(colour)) changeError(index, true);
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`col-xl-4 mx-auto ${styles.layout}`}
    >
      <InputBar
        key={0}
        inputIndex={0}
        placeholder="#F35969"
        value={colours[0]}
        error={error[0]}
        handleChange={handleColourInput}
        showColourPicker={showColourPicker[0]}
        toggleColourPicker={toggleColourPicker}
      />
      <InputBar
        key={1}
        inputIndex={1}
        placeholder="#F35969"
        value={colours[1]}
        error={error[1]}
        handleChange={handleColourInput}
        showColourPicker={showColourPicker[1]}
        toggleColourPicker={toggleColourPicker}
      />
      <div className={`${styles.buttonStyle}`}>
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
      {hasError && (
        <div id="colourHelp" className={`form-text ${styles.smallText}`}>
          Please enter a valid HEX colour code.
        </div>
      )}
    </form>
  );
}
