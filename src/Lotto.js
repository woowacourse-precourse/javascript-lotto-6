import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/errorMessages';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.lotto.count);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.lotto.duplicate);
    }

    if (!this.#isArrayOfNumbers(numbers)) {
      throw new Error(ERROR_MESSAGES.lotto.type);
    }
  }

  #isArrayOfNumbers(numbers) {
    return numbers.every((number) => typeof number === 'number');
  }

  // 추가 기능 구현 : 로또 번호 무작위 생성
  generateRandomNumbers() {
    this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
