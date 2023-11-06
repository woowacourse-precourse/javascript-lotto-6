import { ERROR_MESSAGE } from "../constant/ERROR_MESSAGE";
import { LOTTO_SETTINGS } from "../constant/LOTTO_SETTINGS";

export default class Money {
	#money;

	constructor(money) {
		this.#validateIsNumber(money);
		this.#validateIsDivided(money);
		this.#money = money;
	}

  #validateIsNumber(money) {
    if (isNaN(money)) throw new Error('[ERROR] 숫자여야 합니다.');
  }

  #validateIsDivided(money) {
    if (
      Number(money) <= 0 ||
      Number(money) % LOTTO_SETTINGS.LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGE.AMOUNT_DIVIDE);
    }
  }

  getMoney() {
    return this.#money;
  }

}