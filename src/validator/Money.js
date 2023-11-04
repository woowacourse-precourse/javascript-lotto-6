class MoneyValidator {
  static validateNumber(money) {
    if (Number.isNaN(money)) {
      throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
    }
  }
}

export default MoneyValidator;
