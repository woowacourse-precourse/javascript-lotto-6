import { Random } from "@woowacourse/mission-utils";
import NUMBER from "../static/Number.js";

const LottoNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.lottoStart,
      NUMBER.lottoEnd,
      NUMBER.lottoCount
    );
  },
};

export default LottoNumberGenerator;
