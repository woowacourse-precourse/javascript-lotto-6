import { Console } from "@woowacourse/mission-utils";

import * as CONSTANTS from "./Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
    this.#printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(CONSTANTS.ERROR_INVALID_LOTTO_NUMBER_COUNT);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(CONSTANTS.ERROR_DUPLICATE_LOTTO_NUMBERS);
    }
  }

  #printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  result(winningNums, bonusNum) {
    const res = { cnt: 0, hasBonus: false };
    for (let i = 0; i < CONSTANTS.LOTTO_NUMBERS_COUNT; i++) {
      if (this.#numbers.includes(winningNums[i])) {
        res.cnt++;
      }
    }
    if (this.#numbers.includes(bonusNum)) res.hasBonus = true;
    return res;
  }
}

export default Lotto;
