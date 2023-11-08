class Validate {
  static AMOUNT_ERROR_MESSAGE = "[ERROR] 구매 금액은 1,000원 단위여야 합니다.";
  validatePurchaseAmount = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error(Validate.AMOUNT_ERROR_MESSAGE);
    }
    if (purchaseAmount % 1000 === 0) {
      return true;
    }
  };
}
export default Validate;
