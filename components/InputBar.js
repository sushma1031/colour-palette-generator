import React, { useState } from "react";
import "../styles/InputBar.module.css";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

export default function InputBar(props) {
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleColourInput(colInput) {
    setColour(colInput);
  }

  return (
    <form className="col-xl-5 px-4 mx-auto ">
      <div className={"input-group hex-input" + (props.error ? " error" : "")}>
        <button
          aria-label="Toggle colour picker"
          type="button"
          className="input-bar-btn color-picker-btn"
          onClick={(event) => {
            event.preventDefault();
            setShowColourPicker(!showColourPicker);
          }}
        >
          <ColorizeIcon fontSize="small" style={{ opacity: 0.6 }} />
        </button>
        <input
          aria-label="Enter HEX value"
          type="text"
          value={colour}
          name="colour"
          placeholder="Enter HEX colour code"
          onChange={(e) => {
            handleColourInput(e.target.value);
          }}
          onClick={() => {
            setShowColourPicker(false);
          }}
        />
        <button
          aria-label="Submit"
          className="input-bar-btn"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setShowColourPicker(false);
            props.handleClick(colour);
          }}
        >
          <AutoFixNormalIcon />
        </button>
      </div>
      {props.error && (
        <div id="colourHelp" className="form-text">
          Please enter a valid HEX colour code.
        </div>
      )}
      {showColourPicker && (
        <ColourPicker colour={colour} handleChange={handleColourInput} />
      )}
    </form>
  );
}
