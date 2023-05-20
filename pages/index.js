import Head from 'next/head';
import styles from '../styles/App.module.css';
import Palette from '../components/Palette.js'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colour Palette Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Palette />
      </main>

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
    </div>
  );
}
