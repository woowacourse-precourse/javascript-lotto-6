import Messages from "../utils/Messages.js";

class Money {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  async setMoney(money) {
    this.#validate(money);
    this.#money = money;
  }

  async getMoney() {
    return this.#money;
  }

  #validate(money) {
    const messages = new Messages();
    if (typeof money !== "number") {
      throw new Error(messages.getErrorMsg("notNumberMoney"));
    }
    if (money % 1000 !== 0) {
      throw new Error(messages.getErrorMsg("divide"));
    }
  }
}

export default Money;
