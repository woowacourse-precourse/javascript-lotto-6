class PurchaseAmountError {
  #amount;

  constructor(AMOUNT) {
    this.#amount = AMOUNT;
    this.validPurchaseAmount();
  }

  #amountNotExist() {
    if (this.#amount.length === 0) {
      throw new Error('[ERROR] 구입 금액를 입력해 주세요.');
    }
  }

  #amountNotNum() {
    if (Number.isNaN(Number(this.#amount))) {
      throw new Error('[ERROR] 구입 금액을 숫자로 입력해 주세요.');
    }
  }

  #amountNotDivisible() {
    if (Number(this.#amount) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액을 1000으로 나누어 떨어지도록 입력해 주세요.');
    }
  }

  validPurchaseAmount() {
    this.#amountNotExist();
    this.#amountNotNum();
    this.#amountNotDivisible();
  }
}

export default PurchaseAmountError;
