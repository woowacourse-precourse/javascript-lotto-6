import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";

const OutputView = {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(`\n${purchaseQuantity}${PRINT_MESSAGE.quantity}`);
  },
};

export default OutputView;
