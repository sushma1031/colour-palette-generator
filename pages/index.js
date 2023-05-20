import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.css";
import Palette from '../components/Palette.js';
import Header from '../components/Header';

export default function App() {
  return (
    <>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <footer>Made by Sushma Jayaram</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
