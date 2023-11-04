class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (!Number.isSafeInteger(Number(purchaseAmount))) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
    return purchaseAmount;
  }
}

export default Validation;
