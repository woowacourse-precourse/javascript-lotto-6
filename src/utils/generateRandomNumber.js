import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = (startNum, endNum, amount) =>
  Random.pickUniqueNumbersInRange(startNum, endNum, amount);

const getRandomNumbersByAscending = (startNum, endNum, amount) =>
  generateRandomNumbers(startNum, endNum, amount).sort((a, b) => a - b);

export default getRandomNumbersByAscending;
