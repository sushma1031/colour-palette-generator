import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
