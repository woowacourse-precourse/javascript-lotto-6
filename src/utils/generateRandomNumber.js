import { Random } from '@woowacourse/mission-utils';

const generateRandomNumber = (min, max, count) =>
  Random.pickUniqueNumbersInRange(min, max, count).sort((a, b) => a - b);

export default generateRandomNumber;
