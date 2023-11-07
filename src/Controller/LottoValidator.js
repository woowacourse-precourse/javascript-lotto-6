class LottoValidator {
  /**
   * 주어진 문자열이 NaN인지 아닌지 검증하는 메소드
   * @param {string} str
   * @return {int}
   */
  validate_nan(str) {
    if (isNaN(str)) {
      throw new Error("[ERROR] 잘못된 형식의 숫자입니다.");
    }
    return parseInt(str);
  }

  /**
   * 입력받은 금액 문자열을 검증한 후 정수형으로 리턴하는 메소드
   * @param {string} amount_str
   * @returns {int}
   */
  validate_amount(amount_str) {
    const AMOUNT = this.validate_nan(amount_str);

    if (AMOUNT % 1000) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위만 가능합니다.");
    }

    return AMOUNT;
  }
}

export default LottoValidator;
