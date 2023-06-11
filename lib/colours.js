import Values from "values.js";

function generatePalette(colour) {
  return new Values(colour)
    .all(25)
    .slice(2, 7)
    .map((obj) => ({ hex: obj.hex, rgb: obj.rgb }));
}

export default generatePalette;
