import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

const randomModel = {
  sortRandom(oneOfRandom) {
    return oneOfRandom.sort((a, b) => a - b);
  },

  getOneOfRandom() {
    const { start, end, count } = VALUE.range;
    const oneOfRandom = Random.pickUniqueNumbersInRange(start, end, count);

    return oneOfRandom;
  },

  getRandom(number) {
    const random = [];

    for (let i = 1; i <= number; i += 1) {
      const oneOfRandom = this.getOneOfRandom();
      const sortedOneOfRandom = this.sortRandom([...oneOfRandom]);

      random.push(sortedOneOfRandom);
    }

    return random;
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
