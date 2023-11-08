import { Console } from "@woowacourse/mission-utils";
import { PRIZE_LEVELS } from "../constant/Constant";

class LottoView {
  print(message) {
    Console.print(message);
  }

  showError(message) {
    Console.print(`[ERROR] ${message}`);
  }

  showWinning(winning, ticketCount) {
    this.print("\n당첨 통계");
    this.print("---");

    for (let i = 5; i >= 1; i--) {
      const count = winning[i].count;
      const prize = winning[i].prize.toLocaleString();
      this.print(`${PRIZE_LEVELS[i]} (${prize}원) - ${count}개`);
    }

    const totalPrize = Object.keys(winning)
      .slice(1, 6)
      .reduce((total, i) => {
        return total + winning[i].count * winning[i].prize;
      }, 0);

    const totalCost = 1000 * ticketCount;
    const returnRate = 100 - ((totalCost - totalPrize) / totalCost) * 100;
    this.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
  }
}

export default LottoView;
