import { LOTTO_RULE, MESSAGES } from "../../constants";
import { Validation } from "../../utils";
import { CustomError } from "../../exception";
import { OutputView } from "../../view";

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validation.isLength(numbers, LENGTH)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_LENGTH(LENGTH));
    }

    if (!Validation.isUnique(numbers)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_UNIQUE);
    }

    numbers.every((number) => {
      this.#validateLottoNumber(number);
    });
  }

  #validateLottoNumber(number) {
    if (!Validation.isNumber(number)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_NUMBER);
    }

    if (!Validation.isOnRange(number, MIN, MAX)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_ON_RANGE(MIN, MAX));
    }

    if (!Validation.isInteger(number)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_INTEGER);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    OutputView.print(`[${this.#numbers.join(", ")}]`);
  }
}
