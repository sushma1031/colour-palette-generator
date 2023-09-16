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

  const fields = [
    { name: "primary", placeholder: "#F35969" },
    { name: "secondary", placeholder: "#ECD175" },
  ];

  const hasError = error.some((err) => err);
  
  function handleColourInput(colInput, index) {
    setColours((prev) => {
      const newArr = [...prev];
      newArr[index] = colInput;
      return newArr;
    });
    if (error[index]) {
      if (testHexColour(colInput)) changeError(index, false);
    }
  }

  const changeError = (index, error) => {
    setError((prev) => {
      const newArr = [...prev];
      newArr[index] = error;
      return newArr;
    });
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

      {fields.map((elem, index) => 
        <InputBar
          key={index}
          inputIndex={index}
          name={elem.name}
          placeholder={elem.placeholder}
          value={colours[index]}
          error={error[index]}
          handleChange={handleColourInput}
          showColourPicker={showColourPicker[index]}
          toggleColourPicker={toggleColourPicker}
        />
      )}
      
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
