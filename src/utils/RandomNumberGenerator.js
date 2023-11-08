import { Random } from "@woowacourse/mission-utils";

const lottoNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

export default lottoNumberGenerator;
