import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constant/Messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const duplicate = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_SIX);
    }
    if (duplicate.size != numbers.length)
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_DUPLICATE);

    numbers.map((e) => {
      this.checkNumRange(e);
    });
  }

  checkNumRange(e) {
    if (e <= 0 || 45 < e) throw new Error(ERROR_MESSAGE.NUM_RANGE);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
