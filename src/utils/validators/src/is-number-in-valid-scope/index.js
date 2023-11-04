/**
 * @param {string} input
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
export default function isNumberInValidScope(input, start = 1, end = 45) {
  return input >= start && input <= end;
}
