import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}
