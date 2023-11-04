import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class RandomModel {
  static getOneOfRandom() {
    const { start, end, count } = VALUE.range;
    const oneOfRandom = Random.pickUniqueNumbersInRange(start, end, count);

    oneOfRandom.sort((a, b) => a - b);

    return [...oneOfRandom];
  }

  static getRandom(number) {
    const random = [];

    for (let i = 1; i <= number; i += 1) {
      const oneOfRandom = RandomModel.getOneOfRandom();
      random.push(oneOfRandom);
    }

    return [...random];
  }
}

export default RandomModel;
