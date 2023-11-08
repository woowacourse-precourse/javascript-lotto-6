/**
 * 입력값을 반올림하여 천 단위로 콤마를 찍어 반환합니다.
 * @param {number} value 변환할 숫자입니다.
 * @param {number} decimalPoint 반올림될 소숫점 자릿수입니다.
 * @returns {string} 변환된 퍼센트입니다.
 */
const formatPercentage = (value, decimalPoint) => {
  const formattedNumber = value.toLocaleString(undefined, {
    minimumFractionDigits: decimalPoint,
    maximumFractionDigits: decimalPoint,
  });

  return `${formattedNumber}%`;
};

export default formatPercentage;
