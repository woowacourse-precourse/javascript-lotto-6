import { MissionUtils } from '@woowacourse/mission-utils';
import { magicNumber } from '../constants/index.js';
import { printMethod } from '../utils/ui-method.js';

export default class RandomNumber {
  #randomNumber;

  constructor(cnt) {
    // this.#validate(numbers);
    this.#randomNumber = this.createRandomNumber(cnt);
  }

  // #validate(numbers) {}

  printRandomNumber() {
    this.#randomNumber.forEach((numbers, idx) => {
      printMethod(numbers);
      if (idx === this.#randomNumber.length - 1) printMethod('\n');
    });
  }

  createNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      magicNumber.START_RANGE,
      magicNumber.END_RANGE,
      magicNumber.RANDOM_NUMBER_CNT,
    );
    return numbers.sort((a, b) => a - b);
  }

  createRandomNumber(cnt) {
    const randomNumber = [];
    let numbers = [];
    for (let idx = 0; idx < cnt; idx += 1) {
      numbers = this.createNumbers();
      randomNumber.push(numbers);
    }
    return randomNumber;
  }

  getRandomNumber() {
    return this.#randomNumber;
  }
}
