import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/numbers.js';

const NumberGenerator = {
  createRandomNumber() {
    return Random.pickNumberInRange(RANDOM_NUMBER.from, RANDOM_NUMBER.to);
  },
};

export default NumberGenerator;
