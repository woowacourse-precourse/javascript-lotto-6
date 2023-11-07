class Validator {
  static amountValidator(purchaseAmount) {
    const NUMBER_REGEX = /^[0-9]+$/.test(purchaseAmount);
    if (!NUMBER_REGEX) throw new Error('[ERROR] 숫자만 입력 가능합니다.');

    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1,000원 단위로 입력해 주세요.');
    }

    if (purchaseAmount === '0') throw new Error('[ERROR] 한 장 이상 구매해야 합니다.');
  }
}

export default Validator;
