import Validator from './Validator.js';

function isValidRangeNum(value) {
  return value >= 1 && value <= 45;
}

function isIncludedWinNums(value, winNums) {
  return winNums.includes(value);
}

class BonusNumberValidator extends Validator {
  evaluate(value, winNums) {
    const numberValue = Number(value);
    if ((!isValidRangeNum(numberValue) || isIncludedWinNums(numberValue, winNums) || !this.isValidValue(value))) {
      throw new Error('올바른 보너스 번호를 입력하세요');
    }
    return numberValue;
  }
}

export default BonusNumberValidator;
