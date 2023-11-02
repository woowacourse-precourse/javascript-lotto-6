import { Console } from "@woowacourse/mission-utils";
import { RANK_MONEY, RANK_MATCH } from "../constants/constants.js";

class OutputView {
  static printLottoCnt(lottoCnt) {
    this.printNewLine();
    Console.print(`${lottoCnt}개를 구매했습니다.`);
  }

  static printNewLine() {
    Console.print("");
  }

  static printLottoNumbers(lotto) {
    Console.print(`[${lotto.join(", ")}]`);
  }

  // 4. 당첨 내역을 출력한다
  static printLottoResult(result, money) {
    this.printNewLine();
    Console.print('당첨 통계');
    Console.print('---');
    // 4-1. 당첨 통계를 출력한다
    Object.keys(result).forEach((key) => {
      const [rank, cnt] = [key, result[key]];
      this.printRankResult(rank, cnt);
    });
    this.calculateTotalPrize(result, money);
  }

  static printRankResult(rank, cnt) {
    const prize = RANK_MONEY[rank];
    const match = RANK_MATCH[rank].map((num) => `${num} 일치`).join(', ');
    Console.print(`${match} (${prize.toLocaleString()}원) - ${cnt}개`);
  }

  static calculateTotalPrize(result, money) {
    const totalPrize = Object.keys(result).reduce((acc, key) => {
      const [cnt, prize] = [result[key], RANK_MONEY[key]];
      return acc + (cnt * prize);
    }, 0);
    this.calculateProfitRate(totalPrize, money);
  }

  // 4-2. 수익률을 출력한다.
  static calculateProfitRate(totalPrize, money) {
    const profit = totalPrize / money * 100;
    Console.print(`총 수익률은 ${profit.toFixed(1)}%입니다.`);
  }
}

export default OutputView;