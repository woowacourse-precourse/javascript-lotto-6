import { MissionUtils } from '@woowacourse/mission-utils';

export const generateSixRandomNumber  = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};