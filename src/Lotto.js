import { CONFIG, ERROR_MESSAGE } from '../constants/constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  /*
   * @param {array} numbers - 로또 번호, 당첨 번호
   */
  #validate(numbers) {
    if (numbers.length !== CONFIG.lottoLength) {
      throw new Error(ERROR_MESSAGE.lotto.length);
    }

    if (numbers.some((number) => Number.isNaN(Number(number)))) {
      throw new Error(ERROR_MESSAGE.lotto.notNumber);
    }

    if (!numbers.every((number) => Number.isInteger(number))) {
      throw new Error(ERROR_MESSAGE.lotto.notInt);
    }

    if (
      numbers.some(
        (number) =>
          number < CONFIG.range.minNumber || number > CONFIG.range.maxNumber,
      )
    ) {
      throw new Error(ERROR_MESSAGE.lotto.notRange);
    }

    if (new Set(numbers).size !== CONFIG.lottoLength) {
      throw new Error(ERROR_MESSAGE.lotto.notDifferent);
    }
  }

  /*
   * @returns {array} this.#numbers - 로또 번호, 당첨 번호
   */
  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
