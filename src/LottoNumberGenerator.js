import { MissionUtils } from "@woowacourse/mission-utils";

const LottoNumberGenerator = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}

export default LottoNumberGenerator;