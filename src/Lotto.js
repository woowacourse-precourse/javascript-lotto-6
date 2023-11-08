import { ERRORMESSAGES } from "./util/Message";
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
    if (numbers.length !== 6) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERRORMESSAGES.LOTTO_DUPLICATE);
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_RANGE);
    }

    return true;
  }

  get getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
