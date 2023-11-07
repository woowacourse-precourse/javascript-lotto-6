import COMMON from '../constants/common.js';

function isIncludesDot(target) {
  if (target.constructor === String) {
    return target.includes(COMMON.dot);
  }
  return false;
}

function isPositiveInteger(target) {
  const numericTarget = Number(target);

  return (
    !isIncludesDot(target) &&
    numericTarget > 0 &&
    Number.isInteger(numericTarget) &&
    numericTarget <= Number.MAX_SAFE_INTEGER
  );
}

function roundToOneDecimalPlace(number) {
  return (Math.round(number * 10) / 10).toFixed(1);
}

function formatMoney(money) {
  return money.toLocaleString('ko-kr');
}

export { isPositiveInteger, roundToOneDecimalPlace, formatMoney };
