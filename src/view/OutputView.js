import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_ALERT, MESSAGE_RESULT } from "../static/Static.js";

const OutputView = {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(`\n${purchaseQuantity}${MESSAGE_ALERT.quantity}`);
  },
  printLotto(lotto) {
    Console.print(lotto);
  },
  printResult(winningStatistic) {
    Console.print(MESSAGE_ALERT.beforeResult);
    for (let matchedCount in winningStatistic) {
      Console.print(
        `${MESSAGE_RESULT[matchedCount]} - ${winningStatistic[matchedCount]}개`
      );
    }
  },
};

export default OutputView;
