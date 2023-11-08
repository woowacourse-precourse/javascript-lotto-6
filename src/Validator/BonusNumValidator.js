import Validator from './Validator.js';

class BonusNumberValidator extends Validator {
  evaluate(value, winningNum) {
    const numberValue = Number(value);
    this.checkIsValidValue(value);
    this.checkIsValidRangeNum(numberValue);
    this.checkIsExcludedFromWinningNums(numberValue, winningNum);

    return numberValue;
  }

  checkIsValidValue(value) {
    if (!this.isValidValue(value)) {
      throw new Error('숫자이외의 문자나 공백을 포함한 문자를 입력하지 마세요.');
    }
  }

  checkIsValidRangeNum(value) {
    if (!this.isValidRangeNum(value)) {
      throw new Error('1~45 범위 내의 숫자를 입력하세요.');
    }
  }

  isValidRangeNum(value) {
    return value >= 1 && value <= 45;
  }

  checkIsExcludedFromWinningNums(value, winningNum) {
    if (this.isExcludedFromWinningNums(value, winningNum)) {
      throw new Error('당첨 번호에 포함되는 보너스 문자를 입력하지 마세요.');
    }
  }

  isExcludedFromWinningNums(value, winninNum) {
    return winninNum.includes(value);
  }
}

export default BonusNumberValidator;
