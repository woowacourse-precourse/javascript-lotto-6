import { MissionUtils } from '@woowacourse/mission-utils';

class Random {
  static makeNumber() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return number;
  }
}

export default Random;
