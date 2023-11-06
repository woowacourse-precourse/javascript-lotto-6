class Money {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error("[ERROR] 돈은 숫자여야 합니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 돈은 1000원 이상이여야 합니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 돈은 1000원으로 나누어 떨어져야 합니다.");
    }
    return true;
  }

  get getMoney() {
    return this.#money;
  }
}

export default Money;
