import { Console } from "@woowacourse/mission-utils";
import { INPUT_ERROR_MESSAGE } from "./constant/lotto.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INPUT_ERROR_MESSAGE.INVALID_LOTTO_LENGTH_ERROR);
    }
    if (
      numbers.some(
        (number) =>
          isNaN(Number(number)) || number < 1 || number > 45 || number % 1 !== 0
      )
    ) {
      throw new Error(INPUT_ERROR_MESSAGE.INVALID_INPUT_NUMBER_ERROR);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_INPUT_NUMBER_ERROR);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
