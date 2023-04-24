/**
 * The function checks if a given year is a leap year or not.
 * @param {number} year - The "year" parameter is a number representing the year that we want to check
 * if it is a leap year or not.
 * @returns a boolean value, which is `true` if the input `year` is a leap year, and `false` otherwise.
 */
export function isLeap(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
