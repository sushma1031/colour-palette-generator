import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Layout({ children }) {

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    usePreferredTheme(query.matches);

    query.addEventListener("change", (event) => {
      usePreferredTheme(event.matches);
    });
  }, []);  
 
  function usePreferredTheme(prefersDark) { 
    if (prefersDark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }

  function handleThemeSwitch() {
    document.querySelector("body").classList.toggle("dark");
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
