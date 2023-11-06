import { Console } from "@woowacourse/mission-utils";
import { Validation } from "./Validation.js";
import { LOTTO_RULE, GAME_MESSAGES } from "./Constants.js";
import { CustomError } from "./CustomError.js";

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validation.isLength(numbers, LENGTH)) {
      throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_LENGTH);
    }

    if (!Validation.isUnique(numbers)) {
      throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_UNIQUE);
    }

    numbers.every((number) => {
      if (!Validation.isNumber(number)) {
        throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_NUMBER);
      }

      if (!Validation.isPositive(number)) {
        throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_POSITIVE);
      }

      if (!Validation.isOnRange(number)) {
        throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_RANGE);
      }

      if (!Validation.isInteger(number)) {
        throw new CustomError(GAME_MESSAGES.ERROR.LOTTO.NO_INTEGER);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    return Console.print(this.#numbers.join(","));
  }
}

export default Lotto;
