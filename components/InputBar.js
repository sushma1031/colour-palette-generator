import React, { useState } from "react";
import styles from "../styles/InputBar.module.css";
import IconButton from "@mui/material/IconButton";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";
import GenerateButton from "./GenerateButton";

export default function InputBar(props) {
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleColourInput(colInput) {
    setColour(colInput);
    if (!props.single) props.changeColours(props.index, colInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowColourPicker(false);
    props.handleClick(colour);
  }

  function toggleColourPicker(event) {
    event.preventDefault();
    setShowColourPicker(!showColourPicker);
  }

  const margin = props.single ? "mx-auto" : "mx-0";
  const padding = props.single ? "px-4" : "px-3";

  return (
    <form
      className={`col-xl-5 ${padding} ${margin}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        className={
          "input-group " +
          `${styles.inputGroup} ${styles.hexInput}` +
          (props.error ? ` ${styles.error}` : "")
        }
      >
        <IconButton
          aria-label="Toggle colour picker"
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
          disableRipple
          onClick={toggleColourPicker}
        >
          <ColorizeIcon fontSize="small" />
        </IconButton>
        <input
          aria-label="Enter HEX value"
          type="text"
          value={colour}
          name="colour"
          placeholder={props.placeholder}
          onChange={(e) => {
            handleColourInput(e.target.value);
          }}
          onClick={() => {
            setShowColourPicker(false);
          }}
        />
        {props.single && (
          <GenerateButton handleSubmit={handleSubmit} hoverEffect={false} />
        )}
      </div>
      {props.error && (
        <p id="colourHelp" className={styles.formText}>
          Please enter a valid HEX colour code.
        </p>
      )}
      {showColourPicker && (
        <ColourPicker colour={colour} handleChange={handleColourInput} />
      )}
    </form>
  );
}
