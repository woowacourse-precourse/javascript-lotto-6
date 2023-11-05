import { Random } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

export default getRandomNumber;
