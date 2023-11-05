import { Random } from '@woowacourse/mission-utils';
import { START_NUMBER, END_NUMBER, SIZE } from '../constants/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static random() {
    const randomNumbers = [];
    while (randomNumbers.length < SIZE) {
      const pickedNumber = Random.pickNumberInRange(START_NUMBER, END_NUMBER);
      if (!randomNumbers.includes(pickedNumber)) {
        randomNumbers[randomNumbers.length] = pickedNumber;
      }
    }
    return new Lotto(randomNumbers);
  }
}

export default Lotto;
