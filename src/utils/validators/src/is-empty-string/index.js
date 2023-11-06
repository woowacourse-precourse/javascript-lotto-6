/**
 * @param {string} input
 * @returns {boolean}
 */
export default function isEmptyString(input) {
  const emptyString = '';

  return input.trim() === emptyString;
}
