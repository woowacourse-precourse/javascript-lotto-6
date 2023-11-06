/**
 * @param {string} input
 * @param {number} max
 * @returns {boolean}
 */
export default function isOverMaxPurchaseAmount(input, max) {
  return Number(input) > max;
}
