import ValidationUtils from './ValidationUnits';

class Validation {
  // 구매 금액 유효성 검사
  static validatepurchaseInput(input) {
    ValidationUtils.isinvalidEmptyInput(input);
    ValidationUtils.isinvalidPositiveInteger(input);
    ValidationUtils.isinvalidDivisibleLottoPrice(input);
  }

  // 보너스 번호 유효성 검사
  static validateBonusNumber(input) {
    ValidationUtils.isinvalidEmptyInput(input);
    ValidationUtils.isinvalidPositiveInteger(input);
    ValidationUtils.inLottoNumberRange(input);
  }

  // 로또 번호 유효성 검사
  static validateLottoNumbers(arr) {
    ValidationUtils.isLottoLength(arr.length);
    ValidationUtils.isUniqueElements(arr);
    for (let i = 0; i < 6; i += 1) {
      const LOTTO_NUMBER = Number(arr[i]);
      ValidationUtils.isinvalidPositiveInteger(LOTTO_NUMBER);
      ValidationUtils.inLottoNumberRange(LOTTO_NUMBER);
    }
  }
}
export default Validation;
