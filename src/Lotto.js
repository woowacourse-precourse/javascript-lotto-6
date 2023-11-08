import { MESSAGE_ERROR } from './constants/Error.js';
import { LOTTO_NUMBER_SIZE } from './constants/GameSetting.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const setLottoNumbers = new Set(numbers);

    if (numbers.length !== LOTTO_NUMBER_SIZE) {
      throw new Error(MESSAGE_ERROR.lottoNumberSize);
    }

    if (setLottoNumbers.size !== LOTTO_NUMBER_SIZE) {
      throw new Error(MESSAGE_ERROR.lottoDuplicateNumber);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
