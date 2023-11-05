import Validator from './Validator.js';

function isSplitedComma(value) {
  if (value.length <= 0) throw new Error('[ERROR]');
  return value;
}

function splitValueToComma(value) {
  const result = value.split(',');
  return isSplitedComma(result);
}

function isValidRangeNum(num) {
  return num >= 1 && num <= 45;
}

class WinNumValidator extends Validator {
  evaluate(value) {
    const splitedValues = splitValueToComma(value);
    if (this.isNumsInRange(splitedValues)) return splitedValues;
    throw new Error('[ERROR] : 옳바른 당첨 번호를 입력하세요.');
  }

  isNumsInRange(nums) {
    let result = true;
    nums.forEach((num) => {
      if (!isValidRangeNum(num) || !this.isValidValue(num)) result = false;
    });
    return result;
  }
}

export default WinNumValidator;
