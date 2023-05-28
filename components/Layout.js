import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Layout({ children }) {
  const themeIcons = [<ModeNightIcon />, <LightModeIcon />];
  const [themeIconIndex, setThemeIconIndex] = useState(0);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDark(true);
    }
  }, [dark]);  
 
  function handleThemeSwitch() {
    document.querySelector("body").classList.toggle("dark");
    setDark(!dark);
    setThemeIconIndex((prev) => {
      if (prev === 0)
        return 1;
      return 0;
    })
  }
  

  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/myfavicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar handleTheme={handleThemeSwitch} icon={themeIcons[themeIconIndex]} />
      <div className="content-wrap container-fluid">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
