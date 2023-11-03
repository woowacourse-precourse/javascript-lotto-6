import { MissionUtils } from '@woowacourse/mission-utils';

const pickUniqueRandomNumbers = (min, max, count) => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
    min,
    max,
    count,
  ).sort((a, b) => a - b);

  return numbers;
};

export default pickUniqueRandomNumbers;
