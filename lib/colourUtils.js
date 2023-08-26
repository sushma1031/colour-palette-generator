function decideFontColour({r, g, b}) {

  return r * 0.299 + g * 0.587 + b * 0.114 > 150
    ? "#212427"
    : "#f2f2f2";
}

function testHexColour(colourCode) {
  const colReg = /^#(?:[0-9A-F]{3}){1,2}$/i;
  return colReg.test(colourCode);
}

export {decideFontColour, testHexColour}