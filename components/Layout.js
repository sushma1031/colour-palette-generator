import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Layout({ children }) {
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
  }
  

  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/myfavicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar handleTheme={handleThemeSwitch} />
      <div className="content-wrap container-fluid">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
