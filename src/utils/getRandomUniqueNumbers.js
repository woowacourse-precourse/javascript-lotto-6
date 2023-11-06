import { Random } from '@woowacourse/mission-utils';

const getRandomUniqueNumbers = () => {
  const START = 1;
  const STOP = 45;
  const LENGTH = 6;
  const randomNumbers = Random.pickUniqueNumbersInRange(START, STOP, LENGTH);

  return randomNumbers;
};

export default getRandomUniqueNumbers;
