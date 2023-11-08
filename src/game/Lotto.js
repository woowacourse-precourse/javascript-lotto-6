import MESSAGE from "../constants/MESSAGE.js";
import VALIDATE from "../constants/VALIDATE.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  get numbers() {
    return this.#numbers;
  }

  #sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (!VALIDATE.isSixNumbers(numbers))
      throw new Error(MESSAGE.ERROR.NOT_SIX_NUMBERS);

    if (!VALIDATE.isNotDuplicated(numbers))
      throw new Error(MESSAGE.ERROR.DUPLICATED_NUMBER);

    numbers.forEach((number) => {
      if (!VALIDATE.isTypeOf(number, "number"))
        throw new Error(MESSAGE.ERROR.NOT_NUMBER);
    });

    numbers.forEach((number) => {
      if (!VALIDATE.isInRange(number))
        throw new Error(MESSAGE.ERROR.NOT_IN_RANGE);
    });
  }
}

export default Lotto;
