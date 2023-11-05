import Validator from './Validator.js';

function isValidRangeNum(value) {
  return value >= 1 && value <= 45;
}

class BonusNumberValidator extends Validator {
  evaluate(value) {
    if ((!isValidRangeNum(value) || !this.isValidValue(value))) {
      throw new Error('[ERROR]');
    }
    return Number(value);
  }
}

export default BonusNumberValidator;
