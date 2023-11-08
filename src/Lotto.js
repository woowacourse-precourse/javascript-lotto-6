import ERROR from './constants/Error.js';
import { Console } from '@woowacourse/mission-utils';
import GAME from './constants/Game';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortLotto(numbers);
    this.#numbers = numbers;
    this.#printLotto(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== GAME.LOTTO_LENGTH) {
      throw new Error(ERROR.IS_SIX);
    }

    if (numbers.some((el) => isNaN(el))) {
      throw new Error(ERROR.IS_NAN);
    }

    if (numbers.length > new Set(numbers).size) {
      throw new Error(ERROR.NOT_DUPLICATE);
    }

    if (numbers.some((el) => el > LOTTO_MAX || el < LOTTO_MIN)) {
      throw new Error(ERROR.RANGE);
    }
  }
  // TODO: 추가 기능 구현
  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  #printLotto(numbers) {
    Console.print(numbers);
  }
}

export default Lotto;
