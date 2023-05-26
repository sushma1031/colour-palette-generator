import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/myfavicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <div className="content-wrap container-fluid">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
