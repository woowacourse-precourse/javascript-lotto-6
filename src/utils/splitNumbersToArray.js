/**
 * 문자열로 이루어진 수를 숫자로 이루어진 배열로 나누어 변환합니다.
 * @param {string} string 나뉘어질 문자열입니다.
 * @param {string} separator 문자열을 나눌 기준자입니다.
 * @returns {number[]}
 */
const splitNumbersToArray = (string, separator = '') => Array.from(string.split(separator), Number);

export default splitNumbersToArray;
