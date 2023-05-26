import React, { useEffect } from "react";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <Script src="https://kit.fontawesome.com/689f04e9e5.js" />
      <Component {...pageProps} />
    </>
  );
}
