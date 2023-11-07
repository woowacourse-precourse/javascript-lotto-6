import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";
import STATIC_RESULT from "../static/StaticResult.js";

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`\n${amount}${MESSAGE.purchaseAmount}`);
  },

  // 도메인 생성 후 작업 에정
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

  // 도메인 생성 후 작업 에정
  printResultStatistic(winningStatic) {
    Console.print(MESSAGE.resultStatic);
    for (let i = 0; i < winningStatic.length; i++) {
      Console.print(
        `${STATIC_RESULT[i]}${winningStatic[4 - i]}${MESSAGE.staticSuffix}`
      );
    }
  },
};

export default OutputView;
