import Validator from './Validator.js';

function isValidLength(value) {
  if (value.length <= 0 || value.length !== 6) return false;
  return value;
}

function isValidRangeNum(num) {
  return num >= 1 && num <= 45;
}

class WinningNumberValidator extends Validator {
  evaluate(value) {
    const splitedValues = value.includes(',') ? value.split(',') : [];
    if (!isValidLength(splitedValues) || !this.isNumsInRange(splitedValues)) {
      throw new Error('[ERROR] 옳바른 당첨 번호를 입력하세요');
    }
    return splitedValues;
  }

  isNumsInRange(nums) {
    let result = true;
    nums.forEach((num) => {
      if (!isValidRangeNum(num) || !this.isValidValue(num)) result = false;
    });
    return result;
  }
}

export default WinningNumberValidator;
