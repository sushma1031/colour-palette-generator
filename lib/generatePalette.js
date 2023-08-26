import { interpolate, samples, formatHex, mapper } from "culori";

const colourDetails = (colourObj) => {
  const hex = formatHex(colourObj);
  const getRGB = mapper((val) => {
    return Math.round(val * 255);
  }, "rgb");
  const rgb = getRGB(colourObj);
  return { hex, rgb };
};

const easeInQuad = (t) => t*t;
const easeOutQuad = (t) => -t * (t - 2.0);
const easeInOutQuad = (t) => t<.5 ? 2*t*t : -1+(4-2*t)*t;

function single(colour) {
  const interpolator = interpolate(["#fff", [colour, 0.5], "#000"]);
  return samples(9).map(interpolator).slice(2, 7).map(colourDetails);
}

function duoTone(colours) {
  const interpolator = interpolate(colours);
  return samples(5).map(interpolator).map(colourDetails);
}

export { single, duoTone };
