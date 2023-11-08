import { Random } from "@woowacourse/mission-utils";

const makeLotto = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

export default makeLotto;
