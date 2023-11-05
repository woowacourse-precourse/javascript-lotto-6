import { Random } from '@woowacourse/mission-utils';
import {
  validateLength,
  validateNumber,
  validateRange,
  validateUnique,
} from '../utils/validateFn.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    numbers.sort((a, b) => a - b);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static setLottery() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  getLottery() {
    return this.#numbers;
  }

  #validate(numbers) {
    numbers.forEach((element) => {
      validateNumber(element.toString());
    });
    validateRange(numbers);
    validateLength(numbers);
    validateUnique(numbers);
    return;
  }
}

export default Lotto;
