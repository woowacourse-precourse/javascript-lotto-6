import { MissionUtils } from "@woowacourse/mission-utils";

export const createSixNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};
