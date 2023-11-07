class MoneyChanger {
  #count;

  constructor(money) {
    this.#validateMoney(money);
    this.#count = this.#changeMoneyToCount(money);
  }

  #changeMoneyToCount(money) {
    return money / 1000;
  }

  #validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액이 1,000원 단위가 아닙니다.');
    };
  }

  get count() {
    return this.#count;
  }
}

export default MoneyChanger;
