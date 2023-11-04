import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE, PRINT_RESULT } from "../static/Static.js";

const OutputView = {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(`\n${purchaseQuantity}${PRINT_MESSAGE.quantity}`);
  },
  printLotto(lotto) {
    Console.print(lotto);
  },
  printResult(winningStatistic) {
    Console.print(PRINT_MESSAGE.beforeResult);
    for (let matchedCount in winningStatistic) {
      Console.print(
        `${PRINT_RESULT[matchedCount]} - ${winningStatistic[matchedCount]}개`
      );
    }
  },
};

export default OutputView;
