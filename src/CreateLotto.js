import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

// 입력된 개수만큼 Lotto 인스턴스를 생성하고 배열에 저장
export function createLottoInstances(count) {
  const lottoInstances = [];

  for (let i = 0; i < count; i++) {
    const lottoInstance = new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    );

    lottoInstances.push(lottoInstance);
  }

  return lottoInstances;
}
