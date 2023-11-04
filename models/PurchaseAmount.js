class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error('[ERROR] 금액에 숫자 이외의 다른 문자는 올수 없습니다.');
    }

    if (amount < 1000) {
      throw new Error('[ERROR] 금액은 1000보다 커야 합니다.');
    }

    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1000단위 여야 합니다.');
    }
  }

  getAmount() {
    return this.#amount;
  }
}

export default PurchaseAmount;
