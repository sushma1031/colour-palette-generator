import React, { useState } from "react";
import styles from "../styles/InputGroup.module.css";
import InputBar from "./InputBar";
import GenerateButton from "./GenerateButton";

export default function InputGroup(props) {
  const [colours, setColours] = useState([]);
  const [error, setError] = useState(false);
  
  function handleChange(index, colour) {
    setColours((prev) => {
      prev[index] = colour;
      return prev;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleClick(colours);
  }

  return (
    <div className={`${styles.group}`}>
      <InputBar
        index={0}
        single={false}
        error={error}
        changeColours={handleChange}
        placeholder="#F35969"
      />
      <GenerateButton
        hoverEffect={true}
        handleSubmit={handleSubmit}
      />
      <InputBar
        index={1}
        single={false}
        error={error}
        changeColours={handleChange}
        placeholder="#B476F3"
      />
    </div>
  );
}
