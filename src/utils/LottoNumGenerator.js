import { Random } from "@woowacourse/mission-utils";
import Constant from "./Constant.js";

const LottoNumGenerator = () => {
  const { MIN, MAX, NUM_COUNT } = Constant;
  const nums = Random.pickUniqueNumbersInRange(MIN, MAX, NUM_COUNT);
  nums.sort((a, b) => a - b);
  return nums;
};

export default LottoNumGenerator;
