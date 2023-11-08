/**
 * @param {string} input
 * @param {number} divisor
 * @returns {boolean}
 */
export default function isDivisibleBy(input, divisor) {
  // 0은 나머지를 구할 이유가 없다.
  return !(Number(input) % divisor) && Number(input) !== 0;
}
