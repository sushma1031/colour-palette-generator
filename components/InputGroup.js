import React, { useState } from "react";
import styles from "../styles/InputGroup.module.css";
import InputBar from "./InputBar";
import GenerateButton from "./GenerateButton";

export default function InputGroup() {
  const [colours, setColours] = useState([]);

  return (
    <div className={`${styles.group}`}>
      <InputBar index={0} single={false} error={""} />
      <GenerateButton hoverEffect={true} />
      <InputBar index={1} single={false} error={""} />
    </div>
  );
}
