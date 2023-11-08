import { Random } from "@woowacourse/mission-utils";

const LottoRandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

export default LottoRandomNumberGenerator;