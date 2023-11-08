import { Console } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "../lib/constants/message.js";
import WORD from "../lib/constants/word.js";

const OutputView = {
  printErrorMessage(message) {
    Console.print(message);
  },

  printUserLottoQuanitiy(userLottoQuanitiy) {
    Console.print(`${userLottoQuanitiy}${RESULT_MESSAGE.COUNT}`);
  },

  printLottoList(user) {
    user
      .getLotto()
      .forEach((lotto) =>
        Console.print(
          `${WORD.OPENBRANCKET}${lotto.getLottoNumber()}${WORD.CLOSEBRANCKET}`
        )
      );
  },

  printRaffleStatistic(statisticList) {
    Console.print(RESULT_MESSAGE.RAFFLE_STATIC);
    Console.print(WORD.LINE);
    RESULT_MESSAGE.printRaffleStatistic(statisticList).forEach((statistic) =>
      Console.print(statistic)
    );
  },

  printProfit(profit) {
    Console.print(RESULT_MESSAGE.printProfit(profit));
  },
};

export default OutputView;
