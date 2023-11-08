import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/Messages.js';
import { NUM } from '../constant/Number.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const duplicate = new Set(numbers);
    if (numbers.length !== NUM.LOTTO_LENGTH) {
      Console.print(ERROR_MESSAGE.RANDOM_NUM_SIX);
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_SIX);
    }
    if (duplicate.size != numbers.length) {
      //중첩된 숫자가 있는 경우 예외처리
      Console.print(ERROR_MESSAGE.RANDOM_NUM_DUPLICATE);
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_DUPLICATE);
    }
    numbers.map((e) => {
      this.checkNumRange(e);
    });
  }

  checkNumRange(e) {
    if (e < NUM.LOTTO_MINNUM || NUM.LOTTO_MAXNUM < e) {
      Console.print(ERROR_MESSAGE.NUM_RANGE);
      throw new Error(ERROR_MESSAGE.NUM_RANGE);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
