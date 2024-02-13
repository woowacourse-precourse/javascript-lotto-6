import { ErrorMessage } from './GameMessageManager/GameMessage.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessage.INVALID_INPUT_MAIN_LOTTO_LENGTH);
    }

    numbers.forEach(item => {
      if (isNaN(item))
        throw new Error(ErrorMessage.INVALID_INPUT_LOTTO_TYPE_ERROR);
    });

    if ([...new Set(numbers)].length !== 6)
      throw new Error(ErrorMessage.INVALID_INPUT_MAIN_LOTTO_LENGTH);
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
