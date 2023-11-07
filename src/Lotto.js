import ERROR_MESSAGES from "./constants/ErrorMessage.js";
import LOTTO_MESSAGES from "./constants/LottoMessages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGES.IS_LOTTO_COUNT);

    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSAGES.IS_LOTTO_NUMBER);
      if (number < 1 || number > 45)
        throw new Error(ERROR_MESSAGES.IS_LOTTO_RANGE);
    });

    if (new Set(numbers).size !== 6)
      throw new Error(ERROR_MESSAGES.IS_DUPLICATION);
  }

  // TODO: 추가 기능 구현
  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
