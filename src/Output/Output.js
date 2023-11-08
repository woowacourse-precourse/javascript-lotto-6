import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../constant/PrintMessage";
import STATIC_RESULT from "../constant/StaticResult";

const Output = {
  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}${PRINT_MESSAGE.LOTTO_COUNT}`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].join(", ")}]`);
    }
  },

  printResultStatistic(winningStatic) {
    Console.print(PRINT_MESSAGE.WINNING_STATS);
    for (let i = 0; i < winningStatic.length; i++) {
      Console.print(`${STATIC_RESULT[i]}${winningStatic[4 - i]}개`);
    }
  },

  printRevenueResult(revenue) {
    Console.print(
      `${PRINT_MESSAGE.REVENUE_PREFIX} ${revenue}${PRINT_MESSAGE.REVENUE_SUFFIX}`
    );
  },
};

export default Output;
