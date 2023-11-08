import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

export default class OutputView {
  printPurchaseResult(purchaseCount, lottoArray) {
    Console.print(MESSAGES.PURCHASE_RESULT(purchaseCount));

    lottoArray.forEach((lottoNumber) => {
      const stringLottoNumber = "[" + lottoNumber.join(", ") + "]";
      Console.print(stringLottoNumber);
    });

    Console.print("");
  }

  printWinningStatistics(winningStatistics, roundedProfit) {
    Console.print(MESSAGES.WINNING_STATISTICS);
    Console.print(MESSAGES.THREE_SAME(winningStatistics.get(3)));
    Console.print(MESSAGES.FOUR_SAME(winningStatistics.get(4)));
    Console.print(MESSAGES.FIVE_SAME(winningStatistics.get(5)));
    Console.print(MESSAGES.BONUS_SAME(winningStatistics.get("5+bonus")));
    Console.print(MESSAGES.SIX_SAME(winningStatistics.get(6)));
    Console.print(MESSAGES.PROFIT_RATE(roundedProfit));
  }
}
