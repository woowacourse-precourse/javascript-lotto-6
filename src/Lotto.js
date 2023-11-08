import { Console } from '@woowacourse/mission-utils';
import { checkValue } from './libs/checkValue';
import { LOTTO_NUMBER, PLACE } from './libs/constants';
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

  //등수 계산
  calculateRank(winningNumbers, bonusNumber) {
    let count = 0;
    let rank = 8;
    this.#numbers.forEach(number => {
      if (winningNumbers.includes(number)) {
        count += 1;
      }
    });

    if (count === 6) {
      rank = PLACE.FIRST;
    } else if (count === 5 && this.#numbers.includes(bonusNumber)) {
      rank = PLACE.SECOND;
    } else {
      rank = 8 - count;
    }

    return rank;
  }
}

export default Lotto;
