import { MissionUtils } from "@woowacourse/mission-utils";

export function generateLottoNum(){
  const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lotto.sort((a, b) => a - b);
}


