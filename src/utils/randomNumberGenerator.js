import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONDITION } from '../constants/constants.js';

const randomNumberGenerator = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO_CONDITION.startRange,
    LOTTO_CONDITION.endRange,
    LOTTO_CONDITION.length
  );
};

export default randomNumberGenerator;
