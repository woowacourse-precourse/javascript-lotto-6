/**
 * 배열을 오름차순합니다.
 * @param {number[]} arr 정렬될 배열입니다.
 * @returns {number[]} 정렬한 배열입니다.
 */
export const sortAscending = (arr) => arr.sort((a, b) => a - b);
/**
 * 배열을 내림차순합니다.
 * @param {number[]} arr 정렬될 배열입니다.
 * @returns {number[]} 정렬한 배열입니다.
 */
export const sortDescending = (arr) => arr.sort((a, b) => b - a);
