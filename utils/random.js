import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR from '../constants/error.js';

class Random {
  getRandomLotto() {
    let number;
    do {
      number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    } while (!this.validation(number));

    number.sort((a, b) => a - b);
    return number;
  }

  validation(number) {
    const uniqueSet = new Set(number);
    if (uniqueSet.size !== number.length) {
      MissionUtils.Console.print(ERROR.validateRandom);
      return false;
    }
    return true;
  }
}

export default Random;
