import React, { useState } from "react";
import PaletteBox from "../components/PaletteBox";
import InputGroup from "../components/InputGroup";
import Layout from "../components/Layout";
import {generatePaletteDuo} from "../lib/colours";
import DownloadButton from "../components/DownloadButton";

export default function App() {
  const initialPalette = generatePaletteDuo(["#F35969", "#555"]);
  const [list, setList] = useState(initialPalette);
  const [error, setError] = useState(false);

  function handleClick(colour) {
    console.log("Clicked");
  }
  return (
    <Layout>
      <InputGroup/>
      <PaletteBox coloursList={list} error={error} />
      <DownloadButton />
    </Layout>
  );
}
