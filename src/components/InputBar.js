import React from "react";
import styles from "../styles/InputBar.module.css";
import IconButton from "@mui/material/IconButton";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

const InputBar = (props) => {
  let { showColourPicker, toggleColourPicker, inputIndex, name, placeholder, value, error } = props;

  const handleColourPickerChange = (colour) => {
    props.handleChange(colour, inputIndex);
  }

  return (
    <>
      <div
        className={
          `${styles.textInput} ${styles[name]}` +
          (error ? ` ${styles.error}` : "")
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
          onClick={(e) => {
            e.preventDefault();
            toggleColourPicker(inputIndex);
          }}
        >
          <ColorizeIcon fontSize="small" />
        </IconButton>
        <input
          aria-label="Enter HEX colour code"
          type="text"
          className="form-control"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            props.handleChange(e.target.value, inputIndex);
          }}
          onClick={(e) => {
            e.preventDefault();
            if (showColourPicker) toggleColourPicker(inputIndex);
          }}
        />
      </div>

      {showColourPicker && (
        <ColourPicker
          key={inputIndex}
          index={inputIndex}
          colour={value}
          handleChange={handleColourPickerChange}
        />
      )}
    </>
  );
};

export default InputBar;
