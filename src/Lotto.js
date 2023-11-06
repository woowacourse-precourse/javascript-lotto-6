import { Console } from '@woowacourse/mission-utils';
import { INPUT_ERROR_MESSAGE } from './constants/constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INPUT_ERROR_MESSAGE.MORE_WINNING_NUMBERS_ERROR);
    }
  }

  print() {
    Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
