import React, { useState } from "react";
import "../styles/InputBar.module.css";
// import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

export default function InputBar(props) {
  const [colour, setColour] = useState("");

  function handleColourInput(e) {
    setColour(e.target.value);
  }

  return (
    <form className="">
      <div className="col-xl-5 px-4 mx-auto ">
        <div
          className={"input-group hex-input" + (props.error ? " error" : "")}
        >
          <input
            type="text"
            value={colour}
            name="colour"
            placeholder="Enter HEX value"
            onChange={handleColourInput}
          />
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              props.handleClick(colour);
            }}
          >
            {/* <AutoFixNormalIcon /> */}
          </button>
        </div>
        <div
          id="colourHelp"
          className="form-text"
          style={{ visibility: props.error ? "visible" : "hidden" }}
        >
          Please enter a valid HEX colour code.
        </div>
      </div>
    </form>
  );
}
