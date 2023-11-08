import { ErrorMessage } from "../static/Constant.js";
import CheckDuplicates from "../utils/CheckDuplicates.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessage.LOTTO_LENGTH_ERROR);
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(+number)) {
        throw new Error(ErrorMessage.USER_NUMBER_ERROR);
      }
      if (+number < 1 || +number > 45) {
        throw new Error(ErrorMessage.LOTTO_NUMBER_ERROR);
      }
    });
    if (CheckDuplicates.winningNumber(numbers)) {
      throw new Error(ErrorMessage.USER_DUPLICATE_ERROR);
    }
  }

  getTicketNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
