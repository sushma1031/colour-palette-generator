import React, { useState } from "react";
import styles from '../styles/Form.module.css'
import InputBar from "./InputBar";
import IconButton from "@mui/material/IconButton";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

export default function Form(props) {
  const [error, setError] = useState(false);
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowColourPicker(false);
    console.log("Clicked!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`col-xl-5 mx-auto px-4 ${styles.layout}`}
    >
      <InputBar placeholder="#F35969" name="hex-colour" error={error} />
      <div className={`${styles.buttonStyle}` + (error? ` ${styles.error}`: "")}>
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