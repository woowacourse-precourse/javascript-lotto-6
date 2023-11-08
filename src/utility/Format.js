/**
 * 동적으로 문자열을 생성한다.
 * @param {string} fString 대상 문자열 (ex. '제 이름은 {0}, 나이는 {1}세 입니다.')
 * @param {Array} args 삽입할 문자열 배열 (ex. ['월하', 24])
 * @return {string} 포맷팅된 문자열  (ex. '제 이름은 월하, 나이는 24세 입니다.')
 */
function FormatString(fString, args) {
  return fString.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== 'undefined' ? args[index] : match;
  });
}

/**
 * 숫자를 입력받아 반올림을 적용하여 반환한다.
 * @param {number|string} number 반올림 대상 수
 * @param {number} precision 반올림 자릿수
 * @returns {string} 반올림이 적용된 수
 */
function FormatNumberRound(number, precision) {
  if (typeof number === 'string') {
    number = parseFloat(number);
  }
  return number.toFixed(precision);
}

/**
 * 숫자를 입력받아 천 단위 구분기호를 적용하여 반환한다.
 * @param {number|string} number 포맷을 적용할 숫자
 * @returns {string} 천 단위 구분기호가 적용된 문자열
 */
function FormatNumberWithCommas(number) {
  if (typeof number === 'string') {
    const splited = number.split('.');
    return [parseFloat(splited[0]).toLocaleString(), splited[1]].join('.');
  }
  return number.toLocaleString();
}

export { FormatString, FormatNumberRound, FormatNumberWithCommas }
