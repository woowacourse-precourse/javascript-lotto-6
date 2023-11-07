import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from './constants/lottoNumber.js';
import ERROR from './constants/error.js';
import MessageFormat from './utils/messageFormat.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MessageFormat.error(ERROR.errorMessage.INVALID_LENGTH_WINNING_NUMBER));
    }
    const setNumber = new Set(numbers);
    if (numbers.length !== setNumber.size) {
      throw new Error(MessageFormat.error(ERROR.errorMessage.INVALID_UNIQUE_WINNING_NUMBER));
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  static getRandomLottoNumber() {
    const { minNum, maxNum, count } = LOTTO_NUMBER;
    const randomLottoNumber = Random.pickUniqueNumbersInRange(minNum, maxNum, count);
    const sortLottoNumber = randomLottoNumber.sort((a, b) => a - b);
    return sortLottoNumber;
  }
}

export default Lotto;
