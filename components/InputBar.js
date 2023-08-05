import React, { useState } from "react";
import styles from "../styles/InputBar.module.css";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColourPicker from "./ColourPicker";

export default function InputBar(props) {
  const [colour, setColour] = useState("");
  const [showColourPicker, setShowColourPicker] = useState(false);

  function handleColourInput(colInput) {
    setColour(colInput);
  }

  const margin = props.single ? 'mx-auto' : 'mx-0';

  return (
    <form className={`col-xl-5 px-4 ${margin}`}>
      <div
        className={
          "input-group " +
          `${styles.inputGroup} ${styles.hexInput}` +
          (props.error ? ` ${styles.error}` : "")
        }
      >
        <button
          aria-label="Toggle colour picker"
          type="button"
          className={`${styles.inputBarBtn} ${styles.colorPickerBtn}`}
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
        {props.single &&
          <button
          aria-label="Submit"
          className={styles.inputBarBtn}
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setShowColourPicker(false);
            props.handleClick(colour);
          }}
        >
          <AutoFixNormalIcon />
        </button>
        }
      </div>
      {props.single && props.error && (
        <div id="colourHelp" className={styles.formText}>
          Please enter a valid HEX colour code.
        </div>
      )}
      {showColourPicker && (
        <ColourPicker colour={colour} handleChange={handleColourInput} />
      )}
    </form>
  );
}
