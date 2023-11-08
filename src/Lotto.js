import ERROR from './constants/Error.js';
import { Console } from '@woowacourse/mission-utils';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortLotto(numbers);
    this.#numbers = numbers;
    this.#printLotto(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.isSix);
    }

    if (numbers.some((el) => isNaN(el))) {
      throw new Error(ERROR.isNan);
    }

    if (numbers.length > new Set(numbers).size) {
      throw new Error(ERROR.notDuplicate);
    }

    if (numbers.some((el) => el > 45 || el < 1)) {
      throw new Error(ERROR.range);
    }
  }
  // TODO: 추가 기능 구현
  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  #printLotto(numbers){
    Console.print(numbers);
  }
}

export default Lotto;
