export function find(haystack: number[], needle: number): number {
  let left = 0;
  let right = haystack.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let value = haystack[middle];

    if (value === needle) {
      return middle;
    } else if (value < needle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  throw new Error("Value not in array");
}
