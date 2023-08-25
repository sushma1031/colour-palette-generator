import React, { useState } from "react";
import styles from "../styles/InputBar.module.css";
import IconButton from "@mui/material/IconButton";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

export default function InputBar(props) {
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleColourInput(colInput) {
    setColour(colInput);
  }

  function toggleColourPicker(event) {
    event.preventDefault();
    setShowColourPicker(!showColourPicker);
  }

  return (
    <>
      <div
        className={
          `${styles.textInput}` + (props.error ? ` ${styles.error}` : "")
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
          aria-label="Enter HEX colour code"
          type="text"
          className="form-control"
          value={colour}
          name={props.name}
          placeholder={props.placeholder}
          onChange={(e) => {
            handleColourInput(e.target.value);
          }}
          onClick={() => {
            setShowColourPicker(false);
          }}
        />
      </div>

      {showColourPicker && (
        <ColourPicker colour={colour} handleChange={handleColourInput} />
      )}
    </>
  );
}
