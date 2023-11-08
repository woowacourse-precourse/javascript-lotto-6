import ValidationUtils from './ValidationUtils.js';

export class Validation {
  // 구매 금액 검증
  static validatepurchaseInput(input) {
    ValidationUtils.isEmptyInput(input);
    ValidationUtils.isNotPositiveInteger(input);
    ValidationUtils.isNotDivisible(input);
  }
}
