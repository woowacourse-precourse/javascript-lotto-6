import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./util/Message.js";
import { LOTTO } from "./util/constant.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  get getLotto() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO.numLength) {
      throw new Error(ERROR.lottoWinningNumDuplicate);
    }
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

export default Lotto;
