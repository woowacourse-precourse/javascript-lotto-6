import { LOTTO_NUMBER_SIZE } from './constants/GameSetting.js';
import { MESSAGE_ERROR } from './constants/Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    const setLottoNumbers = new Set(numbers);

    if (numbers.length !== LOTTO_NUMBER_SIZE) {
      throw new Error(MESSAGE_ERROR.lottoNumberSize);
    }

    if (setLottoNumbers.size !== LOTTO_NUMBER_SIZE) {
      throw new Error(MESSAGE_ERROR.lottoNumberDuplicate);
    }
  }

  #sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
