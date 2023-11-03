import { Random } from "@woowacourse/mission-utils";

export const generateRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};
