import React, { useState } from "react";
import Form from "../src/FormSingle";
import PaletteBox from "../src/PaletteBox";
import Layout from "../src/Layout";
import { single } from "../lib/generatePalette";
import DownloadButton from "../src/DownloadButton";

const initialPalette = single("#F35969");
export default function App() { 
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
