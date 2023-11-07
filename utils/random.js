import { MissionUtils } from '@woowacourse/mission-utils';

class Random {
  getRandomLotto() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    number.sort((a, b) => a - b);
    return number;
  }
}

export default Random;
