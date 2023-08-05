import React, { useState } from "react";
import InputBar from "../components/InputBar";
import PaletteBox from "../components/PaletteBox";
import InputGroup from "../components/InputGroup";
import Layout from "../components/Layout";
import generatePalette from "../lib/colours";
import DownloadButton from "../components/DownloadButton";

export default function App() {
  const initialPalette = generatePalette("#6D9EF1");
  const [list, setList] = useState(initialPalette);
  const [error, setError] = useState(false);

  function handleClick(colour) {
    console.log("Clicked");
  }
  return (
    <Layout>
      <InputGroup>
        <InputBar index={0} handleClick={handleClick} error={error} />
        <InputBar index={1} handleClick={handleClick} error={error} />
      </InputGroup>
      <PaletteBox coloursList={list} error={error} />
      <DownloadButton />
    </Layout>
  );
}
