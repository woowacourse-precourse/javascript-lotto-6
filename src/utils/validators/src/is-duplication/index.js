/**
 * @param {string[]} input
 * @returns {boolean}
 */
export default function isDuplication(input) {
  const inputSet = new Set();

  input.forEach((value) => inputSet.add(value));

  return input.length !== inputSet.size;
}
