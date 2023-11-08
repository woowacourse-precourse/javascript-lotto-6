/**
 * 입력값을 반올림하여 천 단위로 콤마를 찍어 반환합니다.
 * @param {number} value 변환할 숫자입니다.
 * @param {number} decimalPoint 반올림될 소숫점 자릿수입니다.
 * @returns {string} 변환된 퍼센트입니다.
 */
const formatPercentage = (value, decimalPoint) => {
  const formattedNumber = value.toFixed(decimalPoint);

  const parts = formattedNumber.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `${parts.join('.')}%`;
};

export default formatPercentage;
