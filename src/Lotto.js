import { Random } from '@woowacourse/mission-utils';
import {
  NUMBERS_COUNT,
  MAX_NUMBER,
  MIN_NUMBER,
} from './constants/Constants.js';
import { areNumbersInRange } from './utils/Utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.#validate();
  }

  #validate() {
    if (this.#numbers.length !== NUMBERS_COUNT) {
      throw new Error(`[ERROR] 로또 번호는 ${NUMBERS_COUNT}개여야 합니다.`);
    }

    if (new Set(this.#numbers).size !== NUMBERS_COUNT) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    if (!areNumbersInRange(this.#numbers)) {
      throw new Error(`[ERROR] 로또 번호는 지정된 범위 내에 있어야 합니다.`);
    }
  }

  static generateRandom() {
    const numbers = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBERS_COUNT,
    );
    return new Lotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
