import React, { useState, useMemo } from "react";
import Form from "../src/FormDuo";
import PaletteBox from "../src/PaletteBox";
import Layout from "../src/Layout";
import { duoTone } from "../lib/generatePalette";
import DownloadButton from "../src/DownloadButton";

export default function DuoTone() {
  const initialPalette = useMemo(() => duoTone(["#F35969", "#ECD175"]), []);
  const [list, setList] = useState(initialPalette);

  function createPalette(colours) {
    try {
      const palette = duoTone(colours);
      setList(palette);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <Layout>
      <Form createPalette={createPalette} />
      <PaletteBox coloursList={list} type="duo"/>
      <DownloadButton />
    </Layout>
  );
}
