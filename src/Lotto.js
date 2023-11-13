import { Console } from '@woowacourse/mission-utils';
import { INPUT_ERROR_MESSAGE } from './constants/constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(INPUT_ERROR_MESSAGE.MORE_WINNING_NUMBERS_ERROR);
    }

    // 중복된 숫자 확인 추가
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
    }
  }

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  returnSameCount(winningNumbers, bonusNumber) {
    let sameCount = 0;
    this.#numbers.forEach(number => {
      if (winningNumbers.includes(number)) {
        sameCount++;
      }
    });

    if (sameCount === 6) {
      sameCount++;
    }

    if (this.#numbers.includes(bonusNumber)) {
      sameCount++;
    }
    return sameCount;
  }
}

export default Lotto;
