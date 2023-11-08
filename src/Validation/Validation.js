import ValidationUtils from './ValidationUtils.js';

class Validation {
  // 구매 금액 검증
  static validateBuyInput(input) {
    ValidationUtils.isEmptyInput(input);
    ValidationUtils.isNotPositiveInteger(input);
    ValidationUtils.isNotDivisible(input);
  }

  // 로또 번호 검증
  static validateLottoNumbers(arr) {
    ValidationUtils.isLength(arr.length);
    ValidationUtils.isUnique(arr);

    for (let i = 0; i < 6; i++) {
      const lottoNumber = Number(arr[i]);
      ValidationUtils.isNotPositiveInteger(lottoNumber);
      ValidationUtils.isOnRange(lottoNumber);
    }
  }
  // 보너스 번호 검증
  static validateBonusNumber(input) {
    ValidationUtils.isEmptyInput(input);
    ValidationUtils.isNotPositiveInteger(input);
    ValidationUtils.isOnRange(input);
  }
}

export default Validation;
