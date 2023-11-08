import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./contants.js";

class MyLotto {
  #money;
  #count;
  #lottos = [];

  constructor(money) {
    this.#money = money;
    this.#validate();
    this.#count = this.#money / NUMBER.LOTTO_PRICE_FORMAT;
    this.printCount();
    this.#createMyLottos();
  }

  #validate() {
    if (isNaN(this.#money)) {
      throw new Error(ERRORS.NOT_NUMBER);
    }
    if (this.#money % 1000 !== 0) {
      throw new Error(ERRORS.UNFORMATTED_NUMBER);
    }
  }

  #createMyLottos() {
    for (let i = 0; i < this.#count; i++) {
      const oneLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(oneLotto);
    }
  }

  printCount() {
    Console.print(`\n${this.#count}${MESSAGE.MY_LOTTOS_COUNT}`);
  }

  printLottos() {
    for (let i = 0; i < this.#count; i++) {
      Console.print(this.#lottos[i]);
    }
  }

  getMyLotts() {
    return this.#lottos;
  }
}

export default MyLotto;
