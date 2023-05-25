import Values from "values.js";

function generatePalette(colour) {
  return new Values(colour)
    .all(25)
    .slice(2, 7)
    .map((obj) => obj.hex);
}

export default generatePalette;
