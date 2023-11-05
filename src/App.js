import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요."
      );
      if (isNaN(purchaseAmount)) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }

      const lottoCount = purchaseAmount / 1000;
      const lottoNumbers = Array.from({ length: lottoCount }, () =>
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      const lottos = lottoNumbers.map((numbers) => new Lotto(numbers));

      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      lottos.forEach((lotto) => MissionUtils.Console.print(lotto.toString()));

      const winningNumbers = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요."
      );
      const bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요."
      );

      const winningResults = lottos.map((lotto) =>
        lotto.getWinningResult(winningNumbers, bonusNumber)
      );
      const earnings = this.#calculateEarnings(winningResults);
      const earningRate = (earnings / purchaseAmount) * 100;

      MissionUtils.Console.print(`총 수익률은 ${earningRate}%입니다.`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play();
    }
  }

  #calculateEarnings(winningResults) {
    const earningsTable = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+": 30000000,
      6: 2000000000,
    };

    return winningResults.reduce(
      (totalEarnings, { matchCount, isBonusMatched }) => {
        const key =
          matchCount === 5 && isBonusMatched ? "5+" : matchCount.toString();
        return totalEarnings + (earningsTable[key] || 0);
      },
      0
    );
  }
}

export default App;
