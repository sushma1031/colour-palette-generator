import React, { useState } from "react";
import InputBar from "../components/InputBar";
import PaletteBox from "../components/PaletteBox";
import Layout from "../components/Layout";
import generatePalette from "../lib/colours";
import DownloadButton from "../components/DownloadButton";

export default function App() {
    const initialPalette = generatePalette("#F35969");
    const [list, setList] = useState(initialPalette);
    const [error, setError] = useState(false);

    function handleClick(colour) {
      try {
        setError(false);
        const colReg = /^#(?:[0-9A-F]{3}){1,2}$/i;
        if (colReg.test(colour)) {
          const palette = generatePalette(colour);
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
      <InputBar handleClick={handleClick} error={error} />
      <PaletteBox coloursList={list} error={error} />
      <DownloadButton/>
    </Layout>
  );
}
