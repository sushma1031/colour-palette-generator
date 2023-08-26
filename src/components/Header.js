import React from 'react';
import { Prata } from "next/font/google";

const prata = Prata({ subsets: ["latin"], weight: "400", display: "swap" });
export default function Header() {
  return (
    <header>
      <h2 className={`${prata.className} heading`}>Generate Beautiful Palettes</h2>
    </header>
  );
}