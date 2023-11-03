export default class Money {
  #money;
  constructor(money) {
    const formattedMoney = this.#removeCommaAndDot(money);
    this.#money = Number(formattedMoney);
  }

  #removeCommaAndDot(money) {
    return money.replace(/[,.]/g, "");
  }

  getMoney() {
    return this.#money;
  }
}
