import React, { useState } from "react";
import styles from "../styles/InputBar.module.css";
import IconButton from "@mui/material/IconButton";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

const InputBar = (props) => {
  let { showColourPicker, toggleColourPicker } = props;
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
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          onClick={(e) => {
            if (showColourPicker)
              toggleColourPicker(e);
          }}
        />
      </div>

      {showColourPicker && (
        <ColourPicker colour={props.value} handleChange={props.onChange} />
      )}
    </>
  );
};

export default InputBar;
