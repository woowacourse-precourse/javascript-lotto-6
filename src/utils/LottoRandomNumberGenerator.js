import { Random } from "@woowacourse/mission-utils";
import STATIC_NUMBER from "../constant/StaticNumber";

const LottoRandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      STATIC_NUMBER.LOTTO_START_NUMBER,
      STATIC_NUMBER.LOTTO_END_NUMBER,
      STATIC_NUMBER.LOTTO_COUNT
    );
  },
};

export default LottoRandomNumberGenerator;
