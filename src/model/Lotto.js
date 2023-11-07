import { Random } from '@woowacourse/mission-utils';
import { START_NUMBER, END_NUMBER, SIZE } from '../constants/index.js';
import {
  isLengthSix,
  isNotNaturalAll,
  isDuplicated,
  isValidLottoRangeAll,
} from '../utils/isValidValue.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isLengthSix(numbers))
      throw new Error('[ERROR] : 로또 번호는 6개여야 합니다.');

    if (isNotNaturalAll(numbers))
      throw new Error(`[ERROR] : 1부터 45까지의 자연수를 입력하세요\n`);

    if (isDuplicated(numbers))
      throw new Error(`[ERROR] : 숫자는 중복될 수 없습니다.\n`);

    if (isValidLottoRangeAll(numbers))
      throw new Error(`[ERROR] : 1부터 45 사이의 수를 입력하세요\n`);
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
