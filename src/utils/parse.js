/**
 *
 * @param {string} str
 * @returns {number[]}
 */
export function parseToCommaSeperatedIntegers(str) {
  return str
    .split(",")
    .map((value) => value.trim())
    .map((value) => parseInt(value));
}
