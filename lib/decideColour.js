export default function decideColour(bgColour) {
  const hexValue = bgColour.split("");
  const rgb = [];
  while (hexValue.length) rgb.push(hexValue.splice(0, 2).join(""));
  const [red, green, blue] = rgb.map((hexStr) => parseInt(hexStr, 16));

  return red * 0.299 + green * 0.587 + blue * 0.114 > 150
    ? "#212427"
    : "#f2f2f2";
}
