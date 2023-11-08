class Purchaser {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 구매 금액은 숫자여야 합니다.');
    }
    if (number < 1000) {
      throw new Error('[ERROR] 최소 구매 금액은 1000원입니다.');
    }
    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
    }
  }

  get purchaseAmount() {
    return this.#number;
  }
}

export default Purchaser;
