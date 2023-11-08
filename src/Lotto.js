import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./message";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_ARRAY_LENGTH);
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.OUT_OF_RANGE);
      }
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
  }

  // TODO: 추가 기능 구현

  sortAscending = () => {
    this.#numbers.sort((a, b) => a - b);
  };

  printLottos = () => {
    this.sortAscending();
    Console.print(`[${this.#numbers.join(", ")}]`);
  };
}

export default Lotto;
