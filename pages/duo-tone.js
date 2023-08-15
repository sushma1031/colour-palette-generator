import React, { useState } from "react";
import PaletteBox from "../components/PaletteBox";
import InputGroup from "../components/InputGroup";
import Layout from "../components/Layout";
import { generatePaletteDuo } from "../lib/colours";
import DownloadButton from "../components/DownloadButton";

export default function DuoTone() {
  const initialPalette = generatePaletteDuo(["#F35969", "#ccc", "#b476f3"]);
  const [list, setList] = useState(initialPalette);
  const [error, setError] = useState(false);

  function handleClick(colours) {
    try {
      setError(false);
      const testValidHex = (colour) => /^#(?:[0-9A-F]{3}){1,2}$/i.test(colour);
      if (colours.length === 2 && colours.every(testValidHex)) {
        const palette = generatePaletteDuo(colours);
        console.log(palette);
        setList(palette);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Layout>
      <InputGroup handleClick={handleClick} />
      <PaletteBox coloursList={list} error={error} />
      <DownloadButton />
    </Layout>
  );
}
