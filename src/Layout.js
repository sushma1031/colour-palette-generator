import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";

const getTheme = () => {
  let theme = "light";

  if (typeof window !== "undefined") {
    theme = sessionStorage.getItem("theme");
    if (!theme) {
      if (!window.matchMedia) {
        //If no choice can be detected, consider light theme
        theme = "light";
      } else {
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        theme = query.matches ? "dark" : "light";
      }
      sessionStorage.setItem("theme", theme);
    }
  }
  return theme;
};

export default function Layout({ children }) {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    function refreshTheme() {
      sessionStorage.setItem("theme", theme);
      if (theme === "light") {
         document.querySelector("body").classList.remove("dark");
      } else {
        document.querySelector("body").classList.add("dark");
      }
    };
    refreshTheme();
  }, [theme]);

  function handleThemeToggle() {
    const prefersTheme = theme === "light" ? "dark" : "light";
    setTheme(prefersTheme);
  }

  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/myfavicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar handleTheme={handleThemeToggle} />
        <div className="content-wrap container-fluid">
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
    </>
  );
}
