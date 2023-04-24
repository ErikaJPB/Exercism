/**
 * The function decodes the value of a resistor based on its color bands and returns the value in ohms,
 * kiloohms, megaohms, gigaohms, or teraohms.
 * @param {string[]} colors - The `colors` parameter is an array of strings representing the color
 * bands on a resistor. The first two elements represent the significant digits of the resistor value,
 * the third element represents the multiplier, and the fourth element (optional) represents the
 * tolerance.
 * @returns a string that represents the decoded resistor value based on the input array of color
 * codes. The string includes the numerical value of the resistor's resistance and the unit of
 * measurement (ohms, kiloohms, megaohms, gigaohms, or teraohms) depending on the magnitude of the
 * resistance value.
 */
export function decodedResistorValue(colors: string[]): string {
  const colorValues: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const mainValue = colorValues[colors[0]] * 10 + colorValues[colors[1]];
  const exponent = Math.pow(10, colorValues[colors[2]]);

  let resistanceValue = mainValue * exponent;

  if (resistanceValue >= 1000000000000) {
    resistanceValue = resistanceValue / 1000000000000;
    return `${resistanceValue} teraohms`;
  } else if (resistanceValue >= 1000000000) {
    resistanceValue = resistanceValue / 1000000000;
    return `${resistanceValue} gigaohms`;
  } else if (resistanceValue >= 1000000) {
    resistanceValue = resistanceValue / 1000000;
    return `${resistanceValue} megaohms`;
  } else if (resistanceValue >= 1000) {
    resistanceValue = resistanceValue / 1000;
    return `${resistanceValue} kiloohms`;
  } else {
    return `${resistanceValue} ohms`;
  }
}
