/**
 * The above code exports a function that takes a color string and returns its corresponding numerical
 * value, as well as an array of color strings.
 * @param {string} color - a string representing a color from the COLORS array. The function colorCode
 * takes this color as input and returns the corresponding number value from 0 to 9 based on the
 * colorValues object. The COLORS array and colorValues object are used in electronic circuits to
 * represent the color-coded values of resistors.
 * @returns The `colorCode` function is returning a number that corresponds to the index of the color
 * in the `COLORS` array. The function takes a string parameter `color`, which is matched to a key in
 * the `colorValues` object. The value of that key is then returned, which is the index of the color in
 * the `COLORS` array.
 */
export const colorCode = (color: string): number => {
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

  return colorValues[color.toLowerCase()];
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
