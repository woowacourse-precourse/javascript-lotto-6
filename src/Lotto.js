import ERROR_MESSAGES from "./constants/ErrorMessage";
import LOTTO_MESSAGES from "./constants/LottoMessages";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_MESSAGES.MAX_LOTTO_COUNT)
      throw new Error(ERROR_MESSAGES.IS_LOTTO_COUNT);

    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSAGES.IS_LOTTO_NUMBER);
      if (
        number < LOTTO_MESSAGES.MIN_LOTTO_NUMBER ||
        number > LOTTO_MESSAGES.MAX_LOTTO_NUMBER
      )
        throw new Error(ERROR_MESSAGES.IS_LOTTO_RANGE);
    });

    if (new Set(numbers).size !== MAX_LOTTO_COUNT)
      throw new Error(ERROR_MESSAGES.IS_DUPLICATION);
  }

  // TODO: 추가 기능 구현
  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
