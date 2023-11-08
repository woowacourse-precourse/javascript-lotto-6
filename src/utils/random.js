import { Random } from '@woowacourse/mission-utils';

const random = {
  getNumbersInRange(min, max, count) {
    const result = Random.pickUniqueNumbersInRange(min, max, count);

    return result;
  }
}

export default random;
