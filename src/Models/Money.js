export default class Money {
  #money;
  constructor(money) {
    money = this.#removeCommaAndDot(money);
    this.#money = money;
  }

  #removeCommaAndDot(money) {
    return money.replace(/[,.]/g, "");
  }
}
