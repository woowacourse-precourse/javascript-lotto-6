import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONSTANT } from '../constant/lottoConstant.js';
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
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANT.MIN_LOTTO_RANGE,
      LOTTO_CONSTANT.MAX_LOTTO_RANGE,
      LOTTO_CONSTANT.LOTTO_LENGTH,
    );
    return new Lotto(numbers);
  }

  getLottery() {
    return this.#numbers;
  }

  #validate(numbers) {
    numbers.forEach((element) => {
      validateNumber(element);
      validateRange(element);
    });
    validateLength(numbers);
    validateUnique(numbers);
  }
}

export default Lotto;
