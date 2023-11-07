import { NUMBERS_CHECK } from "./env/Constant.js";
import { ERROR } from "./env/Message.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicationValidate(numbers);
    this.#notInteger(numbers);
    this.#invalidRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_NUMBERS_LENGTH);
    }
  }

  // TODO: 추가 기능 구현
  #duplicationValidate(numbers) {
    if ([...new Set(numbers)].length !== NUMBERS_CHECK.COUNT) {
      throw new Error(ERROR.INVALID_DUPLICATE_NUMBERS);
    }
  }
  #notInteger(numbers) {
    if (numbers.some((number) => !Number.isInteger(Number(number)))) {
      throw new Error(ERROR.INVALID_INPUT_LOTTO_VALUE);
    }
  }
  #invalidRange(numbers) {
    if (
      numbers.some(
        (number) => number > NUMBERS_CHECK.MAX || number < NUMBERS_CHECK.MIN
      )
    ) {
      throw new Error(ERROR.INVALID_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
