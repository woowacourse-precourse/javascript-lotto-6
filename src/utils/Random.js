import { Random } from "@woowacourse/mission-utils";
import NUMBER from "../constants/NUMBER.js";

const RandomGenerator = {
  lottoWinningNumbers() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.LOTTO.MIN,
      NUMBER.LOTTO.MAX,
      NUMBER.LOTTO.COUNT
    );
  },
};

export default RandomGenerator;
