import { Random } from '@woowacourse/mission-utils';

class User {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  #parseAsNumber(string) {
    return Number(string);
  }

  getNumberofPurchase() {
    return this.#parseAsNumber(this.#amount) / 1000;
  }
}

export default User;
