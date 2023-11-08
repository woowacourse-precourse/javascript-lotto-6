import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";
import STATISTIC_RESULT from "../static/StatisticResult.js";

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`\n${amount}${MESSAGE.purchaseAmount}`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].join(", ")}]`);
    }
  },

  printRevenueResult(revenue) {
    Console.print(
      `${MESSAGE.revenuePrefix} ${revenue}${MESSAGE.revenueSuffix}`
    );
  },

  printResultStatistic(winningStatistic) {
    Console.print(MESSAGE.resultStatic);
    STATISTIC_RESULT.map((result, index) =>
      Console.print(
        `${result}${winningStatistic[4 - index]}${MESSAGE.staticSuffix}`
      )
    );
  },
};

export default OutputView;
