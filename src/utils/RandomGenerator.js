import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/constants.js';

const RandomGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(LOTTO.min, LOTTO.max, LOTTO.count);
  },
};

export default RandomGenerator;
