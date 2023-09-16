import { interpolate, samples, formatHex, mapper, interpolatorSplineBasis } from "culori";

const colourDetails = (colourObj) => {
  const hex = formatHex(colourObj);
  const getRGB = mapper((val) => {
    return Math.round(val * 255);
  }, "rgb");
  const rgb = getRGB(colourObj);
  return { hex, rgb };
};

function monoChrome(colour) {
  const interpolator = interpolate(["#FFF", [colour, 0.5], "#000"]);
  return samples(9).map(interpolator).slice(2, 7).map(colourDetails);
}

function duoTone(colours) {
  const colourSpline = interpolatorSplineBasis([0, 0.3, 0.5, 0.7, 1]);
  const interpolator = interpolate([colourSpline, ...colours]);
  return samples(7).map(interpolator).map(colourDetails);
}

export { monoChrome, duoTone };
