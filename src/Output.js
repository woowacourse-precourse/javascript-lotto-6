import { Console } from "@woowacourse/mission-utils";
import {
  PURCHASE_SIZE,
  LOTTO_STAT,
  EARNING_RATE,
} from "./constant/GAME_RESULT.js";
import { PRIZE } from "./constant/NUMBER.js";
import { GAME_INFO } from "./constant/GAME_INFO.js";
import { purchaseSize } from "./utils/purchaseSize.js";

export const Output = {
  showPurchaseSize(price) {
    Console.print(`${PURCHASE_SIZE(purchaseSize(price))}`);
  },

  drawLotto(lottoArrays) {
    lottoArrays.forEach((row) => Console.print(`[${row.join(", ")}]`));
  },

  winningReport(matchingCount, rate) {
    Console.print(LOTTO_STAT(PRIZE, matchingCount) + EARNING_RATE(rate));
  },

  enter() {
    Console.print(GAME_INFO.ENTER);
  },

  error(error) {
    Console.print(error.message);
  },
};
