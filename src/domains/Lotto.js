import { Random } from '@woowacourse/mission-utils';
import { START_NUMBER, END_NUMBER, SIZE } from '../constants/constants.js';
import {
  isLengthSix,
  isNotNaturalAll,
  isDuplicated,
  isValidLottoRangeAll,
} from '../utils/isValidValue.js';
import {
  ERROR_DUPLICATE_NUMBER,
  ERROR_INVALID_RANGE_NATUAL,
  ERROR_INVALID_LENGTH,
  ERROR_INVALID_RANGE,
} from '../constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isLengthSix(numbers)) throw new Error(ERROR_INVALID_LENGTH);

    if (isNotNaturalAll(numbers)) throw new Error(ERROR_INVALID_RANGE_NATUAL);

    if (isDuplicated(numbers)) throw new Error(ERROR_DUPLICATE_NUMBER);

    if (isValidLottoRangeAll(numbers)) throw new Error(ERROR_INVALID_RANGE);
  }

  getNumbers() {
    return this.#numbers;
  }

  getNumbersString() {
    const trimedNumbers = `[${this.#numbers.join(', ')}]`;
    return trimedNumbers;
  }

  static random() {
    const pickedNumber = Random.pickUniqueNumbersInRange(
      START_NUMBER,
      END_NUMBER,
      SIZE
    );

    return new Lotto(pickedNumber);
  }
}

export default Lotto;
