import { Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant/GAME_INFO.js";
import { purchaseSize } from "./utils/purchaseSize.js";
export const Output = {
  showPurchaseSize(size) {
    Console.print(`${PURCHASE_SIZE(purchaseSize(size))}`);
  },

  drawLotto(lottoArrays) {
    lottoArrays.forEach((row) => Console.print("[" + row.join(", ") + "]"));
  },

  showEnter() {
    Console.print(GAME_INFO.ENTER);
  },

  showError(error) {
    Console.print(error.message);
  },
};
