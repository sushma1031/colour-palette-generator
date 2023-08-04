export default function decideFontColour({r, g, b}) {

  return r * 0.299 + g * 0.587 + b * 0.114 > 150
    ? "#212427"
    : "#f2f2f2";
}
