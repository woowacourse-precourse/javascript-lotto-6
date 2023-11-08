import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/MESSAGE.js";

const Output = {
  printCountOfLotto(count) {
    Console.print(MESSAGE.SIGNAL.NEW_LINE);
    Console.print(MESSAGE.OUTPUT.PURCHASE_COUNT(count));
  },

  printLotto(lottos) {
    lottos.forEach((lotto) => {
      Console.print(MESSAGE.OUTPUT.LOTTO_NUMBER(lotto.numbers));
    });
    Console.print(MESSAGE.SIGNAL.NEW_LINE);
  },

  printResult(results) {
    Console.print(MESSAGE.SIGNAL.NEW_LINE);
    Console.print(MESSAGE.OUTPUT.RESULT_HEADER);
    Console.print(MESSAGE.SIGNAL.DIVIDER);
    results.forEach((result) => Console.print(MESSAGE.OUTPUT.RESULT(result)));
  },

  printProfit(profit) {
    Console.print(MESSAGE.OUTPUT.PROFIT(profit));
  },

  printError(error) {
    Console.print(error);
    Console.print(MESSAGE.SIGNAL.NEW_LINE);
  },
};

export default Output;
