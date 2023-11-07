import Validator from './Validator.js';

function isValidLength(value) {
  if (value.length <= 0 || value.length !== 6) return false;
  return value;
}

function isValidRangeNum(num) {
  return num >= 1 && num <= 45;
}

class WinNumsValidator extends Validator {
  evaluate(input) {
    const splitedValues = input.includes(',') ? input.split(',') : [];
    if (!isValidLength(splitedValues) || !this.isNumsInRange(splitedValues)) {
      throw new Error('올바른 당첨 번호를 입력하세요');
    }
    return splitedValues.map((value) => Number(value));
  }

  isNumsInRange(nums) {
    let result = true;
    nums.forEach((num) => {
      if (!isValidRangeNum(num) || !this.isValidValue(num)) result = false;
    });
    return result;
  }
}

export default WinNumsValidator;
