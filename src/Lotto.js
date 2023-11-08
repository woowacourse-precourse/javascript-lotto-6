import { ERRORMESSAGES } from "./util/Message";
import { LOTTO_CONSTANTS } from "./util/constants";
const { LENGTH, MIN, MAX } = LOTTO_CONSTANTS;
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => Number.isNaN(Number(number)))) {
      throw new Error(ERRORMESSAGES.NOT_A_NUMBER);
    }
    if (numbers.length !== LENGTH) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_LENGTH);
    }
    if (new Set(numbers).size !== LENGTH) {
      throw new Error(ERRORMESSAGES.LOTTO_DUPLICATE);
    }
    if (numbers.some((number) => number < MIN || number > MAX)) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_RANGE);
    }
    return true;
  }

  get getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
