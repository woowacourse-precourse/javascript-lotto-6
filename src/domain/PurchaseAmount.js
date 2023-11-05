class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validatePurchaseAmount(parseInt(amount, 10));
    this.#amount = amount;
  }

  #validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.');
    }
  }

  getAmount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;
