import { Random, Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.THE_NUMBER);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.THE_NUMBER);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.OVERLAP);
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_CONDITION);
      }
    });
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    const sortedNumbers = this.#numbers.sort((a, b) => a - b);
    Console.print(
      `[${sortedNumbers[0]}, ${sortedNumbers[1]}, ${sortedNumbers[2]}, ${sortedNumbers[3]}, ${sortedNumbers[4]}, ${sortedNumbers[5]}]`
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
