import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO_NUMBER } from './Utils/constants.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER.CONDITION_LENGTH) {
      throw new Error(ERROR_MESSAGE.USER_INPUT_LENGTH);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.USER_INPUT_DUPLICATE);
    }

    if (numbers.some(number => number < LOTTO_NUMBER.CONDITION_MIN || number > LOTTO_NUMBER.CONDITION_MAX)) {
      throw new Error(ERROR_MESSAGE.USER_INPUT_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현

  static createRandomNumbers() {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < LOTTO_NUMBER.CONDITION_LENGTH) {
      uniqueNumbers.add(Random.pickNumberInRange(LOTTO_NUMBER.CONDITION_MIN, LOTTO_NUMBER.CONDITION_MAX));
    }
    return Array.from(uniqueNumbers);
  }

  lottoNumbers() {
    return [...this.#numbers];
  }

  static generateBonusNumber(numbers) {
    const remainingNumbers = Array.from({ length: LOTTO_NUMBER.CONDITION_MAX }, (_, index) => index + LOTTO_NUMBER.CONDITION_MIN).filter(number => !numbers.includes(number));
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const bonusNumber = remainingNumbers[randomIndex];

    return [bonusNumber];
  }
}

export default Lotto; 