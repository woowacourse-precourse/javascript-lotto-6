import LottoValidator from './classes/LottoValidator';
import { ERROR_MESSAGE, MAX } from './constant/lottoConstants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    numbers.forEach(number => LottoValidator.validateLottoNumber(number));

    if (numbers.length !== MAX.LOTTO_NUMBERS) {
      throw ERROR_MESSAGE.LESS_LOTTO_NUMBERS;
    }

    if (new Set(numbers).size !== MAX.LOTTO_NUMBERS) {
      throw ERROR_MESSAGE.LOTTO_NUMBER_HAVE_DUPLICATE;
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
