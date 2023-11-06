class Purchase {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    const NUMBER = parseInt(amount, 10);
    this.validateType(NUMBER);
    this.validateRange(NUMBER);
    this.validateUnit(NUMBER);
  }

  validateRange(amount) {
    if (amount <= 0) {
      throw new Error('[ERROR] 0원보다 큰 금액을 입력해야 합니다.');
    }
  }

  validateUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위 금액을 입력해야 합니다.');
    }
  }

  validateType(amount) {
    if (isNaN(amount)) throw new Error('[ERROR] 숫자로 이루어져야 합니다.');
  }

  getAmount() {
    return this.#amount / 1000;
  }
}

export default Purchase;
