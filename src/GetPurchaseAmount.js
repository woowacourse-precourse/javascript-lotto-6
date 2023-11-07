const UNIT_OF_PURCHASE = 1000;

class GetPurchaseAmount {
  #purchase;

  constructor(purchase) {
    this.#purchaseValidate(purchase);
    this.#purchase = purchase;
  }

  #purchaseValidate(purchase) {
    const regexNumber = /^\d+$/;
    if (!regexNumber.test(purchase)) {
      throw new Error("[ERROR] 구매 금액은 숫자 형식만 가능합니다.");
    } else if (purchase % UNIT_OF_PURCHASE !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000으로 나누어 떨어져야 합니다.");
    }
  }

  getPurchaseAmount() {
    return this.#purchase;
  }
}

export default GetPurchaseAmount;
