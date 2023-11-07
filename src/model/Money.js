import { ERROR_MESSAGE } from '../constant/ERROR_MESSAGE';
import { LOTTO_SETTINGS } from '../constant/LOTTO_SETTINGS';

export default class Money {
	#money;

	constructor(money) {
		this.#validateIsInteger(money);
    this.#validatePositiveNumber(money);
		this.#validateIsDivided(money);
		this.#money = Number(money);
	}

  #validateIsInteger(money) {
    if (!Number.isInteger(+money)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }

  #validateIsDivided(money) {
    if (
      Number(money) <= 0 ||
      Number(money) % LOTTO_SETTINGS.LOTTO_PRICE !== 0
    ) {
      throw new Error(ERROR_MESSAGE.AMOUNT_DIVIDE);
    }
  }

  #validatePositiveNumber(money) {
    if (money <= 0) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_NUMBER)
    }
  }


  getMoney() {
    return this.#money;
  }

}