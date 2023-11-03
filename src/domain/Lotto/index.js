import { LOTTO_RULE, MESSAGES } from "../../constants";
import { Validation } from "../../utils";
import { CustomError } from "../../exception";
import { OutputView } from "../../view";

const length = LOTTO_RULE.LENGTH;
const min = LOTTO_RULE.RANGE.MIN;
const max = LOTTO_RULE.RANGE.MAX;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validation.isLength(numbers, length)) {
      throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_LENGTH(length));
    }

    numbers.every((number) => {
      if (!Validation.isNumber(number)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_NUMBER);
      }

      if (!Validation.isOnRange(number, min, max)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_ON_RANGE(min, max));
      }

      if (!Validation.isInteger(number)) {
        throw new CustomError(MESSAGES.ERROR.LOTTO.NOT_INTEGER);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    OutputView.print(this.#numbers.join(", "));
  }
}

export default Lotto;
