export default function decideFontColour(rgb) {
  const [red, green, blue] = [...rgb];

  return red * 0.299 + green * 0.587 + blue * 0.114 > 150
    ? "#212427"
    : "#f2f2f2";
}
