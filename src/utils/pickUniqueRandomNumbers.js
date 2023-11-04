import { MissionUtils } from '@woowacourse/mission-utils';

const pickUniqueRandomNumbers = (min, max, count) => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(min, max, count);

  return numbers;
};

export default pickUniqueRandomNumbers;
