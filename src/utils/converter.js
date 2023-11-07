/**
 * 문자열을 숫자로 변환해주는 함수
 * @param {string} inputString 문자열
 * @returns {number} 숫자로 변환된 문자열
 */
function stringToNumber(inputString) {
  return Number(inputString);
}

/**
 * 문자열을 구분자로 분리하여 숫자 배열로 변환해주는 함수
 * @param {string} inputString 문자열
 * @param {string} delimiter 구분자
 * @returns {number[]} 숫자 배열
 */
function stringToNumberArray(inputString, delimiter) {
  return inputString.split(delimiter).map(num => Number(num));
}

export { stringToNumber, stringToNumberArray };
