import { Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT } from "./Message.js";

class Purchase {
  #amountOfLotto;
  constructor() {
    this.#amountOfLotto = 0;
  }

  getCredit() {
    const cash = Console.readLineAsync(INPUT.CREDIT);
    return cash;
  }

  getAmountOfLotto(credit) {
    this.#amountOfLotto = this.isDividedBy1000(credit);
    return this.#amountOfLotto;
  }

  isDividedBy1000(credit) {
    if (credit % 1000 !== 0) {
      throw new Error(ERROR.NOT_DIVIDED_BY_1000);
    } else {
      return Math.floor(credit / 1000);
    }
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`${amountOfLotto}개를 구매했습니다.\n`);
  }
}

export default Purchase;
