import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = (startNum, endNum, amount) =>
  Random.pickUniqueNumbersInRange(startNum, endNum, amount);

export default generateRandomNumbers;
