import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

const randomModel = {
  getOneOfRandom() {
    const { start, end, count } = VALUE.range;
    const oneOfRandom = Random.pickUniqueNumbersInRange(start, end, count);

    oneOfRandom.sort((a, b) => a - b);

    return [...oneOfRandom];
  },

  getRandom(number) {
    const random = [];

    for (let i = 1; i <= number; i += 1) {
      const oneOfRandom = this.getOneOfRandom();
      random.push(oneOfRandom);
    }

    return [...random];
  },

  getStringOfRandom(random) {
    const stringOfRandom = [];

    for (let i = 0; i < random.length; i += 1) {
      stringOfRandom.push(`[${random[i].join(', ')}]\n`);
    }

    return stringOfRandom;
  },
};

export default randomModel;
