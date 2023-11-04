/**
 *
 * @param {string} input
 * @param {number} divisor
 * @returns {boolean}
 */
export default function isDivisibleBy(input, divisor = 1000) {
  return !(Number(input) % divisor) && Number(input) !== 0;
}
