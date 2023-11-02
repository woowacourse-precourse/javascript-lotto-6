import { MissionUtils } from "@woowacourse/mission-utils";

const randomNumber = () => {
  const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return number;
};

export default randomNumber;
