import LottoError from "../Error/LottoError";

export default class Money {
  #money;
  constructor(money) {
    const formattedMoney = this.#removeCommaAndDot(money);
    this.#validateIsNumber(formattedMoney);
    this.#money = Number(formattedMoney);
  }

  #removeCommaAndDot(money) {
    return money.replace(/[,.]/g, "");
  }

  #validateIsNumber(money) {
    if (isNaN(money)) throw new LottoError("숫자를 입력해주세요.");
  }

  getMoney() {
    return this.#money;
  }
}
