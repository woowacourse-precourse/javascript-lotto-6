import { Console } from "@woowacourse/mission-utils";
import { RANK_MONEY, RANK_MATCH, OUTPUT_MESSAGE } from "../constants/constants.js";

class OutputView {
  // 2-1. 구매한 로또 수량을 출력한다.
  static printLottoCnt(lottoCnt) {
    this.printNewLine();
    Console.print(OUTPUT_MESSAGE.printLottoCnt(lottoCnt));
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
    Console.print(OUTPUT_MESSAGE.printLottoResult);
    // 4-1. 당첨 통계를 출력한다
    Object.keys(result).forEach((key) => {
      const [rank, cnt] = [key, result[key]];
      this.printRankResult(rank, cnt);
    });
    this.calculateTotalPrize(result, money);
  }

  static printRankResult(rank, cnt) {
    const prize = RANK_MONEY[rank];
    const match = RANK_MATCH[rank].map((item) => OUTPUT_MESSAGE.printRankMatch(item)).join(', ');
    Console.print(OUTPUT_MESSAGE.printRankResult(match, prize, cnt));
  }

  static calculateTotalPrize(result, money) {
    const totalPrize = Object.keys(result).reduce((acc, key) => {
      const [cnt, prize] = [result[key], RANK_MONEY[key]];
      return acc + (cnt * prize);
    }, 0);
    this.printProfit(totalPrize, money);
  }

  // 4-2. 수익률을 출력한다.
  static printProfit(totalPrize, money) {
    const profit = totalPrize / money * 100;
    Console.print(OUTPUT_MESSAGE.printProfit(profit));
  }
}

export default OutputView;