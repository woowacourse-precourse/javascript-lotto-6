class Validator {
  isValidPurchaseAmount(money) {
    if (!this.isThousandWonUnit(money))
      throw new Error('[ERROR]: 올바르지 않은 구매 요청 금액입니다.');
    if (this.isNumber(money))
      throw new Error('[ERROR]: 구매 금액은 숫자여야 합니다.');
    return true
  }

  isThousandWonUnit(money) {
    if (money % 1000 !== 0 && money !== 0) return true;
    return false;
  }

  isNumber(money) {
    if (!isNaN(money)) return true;
    return false;
  }
}

export default Validator;
