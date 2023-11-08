import Validator from './Validator.js';

class WinNumsValidator extends Validator {
  evaluate(input) {
    const splitedValues = input.includes(',') ? input.split(',') : [];

    this.checkAllNumsInWinningNum(splitedValues);
    if (!this.isValidLength(splitedValues)) {
      throw new Error('올바른 당첨 번호를 입력하세요');
    }

    return splitedValues.map((value) => Number(value));
  }

  checkAllNumsInWinningNum(values) {
    values.forEach((value) => {
      const numberValue = Number(value);
      if (!this.isValidRangeNum(numberValue)) {
        throw new Error('당첨 번호의 숫자들은 1~45 사이의 숫자로 구성되어야 합니다.');
      }
    });
  }

  isValidLength(value) {
    if (value.length <= 0 || value.length !== 6) return false;
    return value;
  }

  isValidRangeNum(num) {
    return num >= 1 && num <= 45;
  }
}

export default WinNumsValidator;
