import { Console } from "@woowacourse/mission-utils";
import COUNT_WINNERS from "./CountWinners.js";

class LottoView {
  showLottoNumbers(countOfLotto, lottos) {
    Console.print(`\n${countOfLotto}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
  }

  showResults(countWinners) {
    Console.print("\n당첨 통계\n---");
    const winnerOrder = [3, 4, 5, "5+1", 6];

    winnerOrder.forEach((key) => {
      const { count, prize, text } = COUNT_WINNERS[key];
      const winnerCount = countWinners[key];
      Console.print(`${text} (${prize.toLocaleString()}원) - ${winnerCount}개`);
    });
  }

  showProfitRate(profitRate) {
    Console.print(`\n총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoView;
