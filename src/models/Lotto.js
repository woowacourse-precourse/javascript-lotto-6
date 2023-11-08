import { LOTTO_SETTING } from '../constants/Setting.js';
import { EXCEPTION_MESSAGE } from '../constants/ExceptionMessage.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SETTING.numbersLength) {
      throw new Error(EXCEPTION_MESSAGE.lottoNumbersLength);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(EXCEPTION_MESSAGE.lottoNumberIsDuplicated);
    }
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(EXCEPTION_MESSAGE.lottoNumberFormat);
      }
      if (number < LOTTO_SETTING.minNumber || number > LOTTO_SETTING.maxNumber) {
        throw new Error(EXCEPTION_MESSAGE.lottoNumberFormat);
      }
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
