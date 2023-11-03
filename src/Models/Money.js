import LottoError from "../Error/LottoError";
import LOTTO_SETTINGS from "../config/gameSetting";

export default class Money {
  #money;

  constructor(money) {
    const formattedMoney = this.#removeCommaAndDot(money);
    this.#validateIsNumber(formattedMoney);
    this.#validateIsDevided(formattedMoney);
    this.#money = Number(formattedMoney);
  }

  #removeCommaAndDot(money) {
    return money.replace(/[,.]/g, "");
  }

  #validateIsNumber(money) {
    if (isNaN(money)) throw new LottoError("숫자를 입력해주세요.");
  }

  #validateIsDevided(money) {
    if (Number(money) % 1000 !== 0) {
      throw new LottoError(
        `금액은 ${LOTTO_SETTINGS.TICKET_PRICE}단위여야합니다.`
      );
    }
  }

  getMoney() {
    return this.#money;
  }
}
