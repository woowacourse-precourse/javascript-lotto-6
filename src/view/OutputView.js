import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";
import STATISTIC_RESULT from "../static/StatisticResult.js";
import NUMBER from "../static/Number.js";

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`\n${amount}${MESSAGE.purchaseAmount}`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i += 1) {
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
    STATISTIC_RESULT.forEach((result, index) =>
      Console.print(
        `${result}${winningStatistic[NUMBER.arraySize - index]}${
          MESSAGE.staticSuffix
        }`
      )
    );
  },
};

export default OutputView;
