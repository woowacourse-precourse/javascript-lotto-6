import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoService {
  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      let lotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
      lottos.push(lotto);
    }
    return lottos;
  }
}

export default LottoService;
