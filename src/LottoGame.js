import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
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

  static calculateResult(lottos, winningNumbers, bonusNumber) {
    const result = { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 0 };

    lottos.map((lotto) => {
      const matchedCount = lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
      if (matchedCount === 5 && lotto.getNumbers().includes(bonusNumber)) {
        result["5+1"]++;
      } else if (result[matchedCount] !== undefined) {
        result[matchedCount]++;
      }
    });
    return result;
  }
}

export default LottoGame;
