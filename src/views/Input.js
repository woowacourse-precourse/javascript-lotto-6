import { Console } from "@woowacourse/mission-utils";
import { message } from "../constants";

const input = {
  enterPurchaseAmount: async function () {
    return await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
  },

  enterWinningNumber: async function () {
    return await Console.readLineAsync(message.ENTER_WINNING_NUMBER);
  },

  enterBonusNumber: async function () {
    return await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
  },
};

export default input;
