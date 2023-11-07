const { Console } = require("@woowacourse/mission-utils");

import purchaseLotto from "./PurchaseLotto";
import calculateReturn from "./CalculateReturn";
import checkResults from "./CheckResults";
import getBonusNumber from "./GetBonusNumber";
import getPrize from "./GetPrize";
import getWinningNumbers from "./GetWinningNumbers";

class App {
  async play() {
    try {
      Console.print("구입 금액을 입력해주세요.")
      const lottos = await purchaseLotto();
      Console.print(` ${lottos.length}개를 구매했습니다.`);
      for (const lotto of lottos) {
        const numbersString = `[${lotto.getNumbers().join(", ")}]`;
        Console.print(numbersString);
      }

      const winningNumbers = await getWinningNumbers();
      const bonusNumber = await getBonusNumber();
      const results = checkResults(lottos, winningNumbers, bonusNumber);

      Console.print("\n당첨 통계");
      Console.print("---");
      for (const [matchingCount, count] of Object.entries(results)) {
        if (matchingCount < 3) {
          continue; 
        }

        let actualMatchingCount = matchingCount;
        if (matchingCount === "5.5") {
          actualMatchingCount = 5;
        }

        const prize = getPrize(actualMatchingCount, matchingCount === "5.5");
        Console.print(`${prize} - ${count}개`);
      }

      const roundedReturnRate = calculateReturn(results, lottos.length * 1000);
      Console.print(`총 수익률은 ${roundedReturnRate}%입니다.`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
