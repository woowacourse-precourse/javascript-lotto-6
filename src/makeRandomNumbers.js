import { MissionUtils } from "@woowacourse/mission-utils";

const makeRandomNumbers = () => {
  const NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

  return NUMBERS;
};

export default makeRandomNumbers;
