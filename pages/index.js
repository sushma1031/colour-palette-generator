import React, { useState } from "react";
import Form from "../components/FormSingle";
import PaletteBox from "../components/PaletteBox";
import Layout from "../components/Layout";
import { single } from "../lib/generatePalette";
import DownloadButton from "../components/DownloadButton";

export default function App() {
    const initialPalette = single("#F35969");
    const [list, setList] = useState(initialPalette);

    function createPalette(colour) {
      try {
        const palette = single(colour);
        setList(palette);
      } catch (err) {
        console.log(err.message);
      }
    }

  return (
    <Layout>
      <Form createPalette={createPalette} />
      <PaletteBox coloursList={list}/>
      <DownloadButton />
    </Layout>
  );
}
