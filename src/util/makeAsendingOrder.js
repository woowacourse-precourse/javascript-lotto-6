/**
 * 배열을 오름차순 해서 반환합니다.
 * @param {number[]} arr
 * @returns {number[]}
 */
const makeAsendingOrder = (arr) => [...arr].sort((a, b) => a - b);

export default makeAsendingOrder;
