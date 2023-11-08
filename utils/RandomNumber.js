import { Random } from '@woowacourse/mission-utils';

const createRandomNumbers = (min, max, length) =>
  Random.pickUniqueNumbersInRange(min, max, length).sort((a, b) => a - b);

export default createRandomNumbers;
