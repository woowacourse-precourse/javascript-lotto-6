import { MissionUtils } from '@woowacourse/mission-utils';
import { magicNumber } from '../constants/index.js';
import { printMethod } from '../utils/ui-method.js';

export default class RandomNumberArr {
  #randomNumberArr;

  constructor(cnt) {
    // this.#validate(numbers);
    this.#randomNumberArr = this.createRandomNumberArr(cnt);
  }

  // #validate(numbers) {}

  printRandomNumberArr() {
    this.#randomNumberArr.forEach((randomNumber, idx) => {
      printMethod(randomNumber);
      if (idx === randomNumber.length + 1) printMethod('\n');
    });
  }

  createRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      magicNumber.START_RANGE,
      magicNumber.END_RANGE,
      magicNumber.LOTTO_NUMBER_CNT,
    );
    return randomNumber.sort((a, b) => a - b);
  }

  createRandomNumberArr(cnt) {
    const randomNumberArr = [];
    let randomNumber = [];
    for (let idx = 0; idx < cnt; idx += 1) {
      randomNumber = this.createRandomNumber();
      randomNumberArr.push(randomNumber);
    }
    return randomNumberArr;
  }
}
