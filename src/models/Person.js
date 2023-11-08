import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import Validation from '../utils/Validation.js';

class Person {
  #money;

  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    if (Validation.money(money)) {
      throw new Error(ERROR_MESSAGE.INVALID_MONEY);
    }
  }

  purchasedLottoNumber() {
    return Math.floor(this.#money / 1000);
  }

  purchasedLottoInformation(lottoArray) {
    this.#lottos = lottoArray;
  }

  goToLottoShop() {
    return this.#lottos;
  }

  getMoney() {
    return Math.floor(this.#money / 1000) * 1000;
  }
}

export default Person;
