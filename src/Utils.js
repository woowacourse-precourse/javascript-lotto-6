import { MissionUtils } from '@woowacourse/mission-utils';

export function getRandomNumbers() {
  const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomNumbers.sort((a, b) => a - b);
}
