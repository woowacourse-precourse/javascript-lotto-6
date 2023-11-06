import { Random, Console } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { LOTTO_NUMBER } from './libs/constants';
import { throwError } from './libs/throwError';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // if (numbers.length !== 6) {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
    const { errorMessage } = checkValue.numbers(numbers, LOTTO_NUMBER);

    if (errorMessage) {
      throwError(errorMessage);
    }
  }

  //오름차순 정렬
  ascendingNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  //[8, 21, 23, 41, 42, 43] 형식으로 출력
  printNumbers() {
    this.ascendingNumbers();
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
