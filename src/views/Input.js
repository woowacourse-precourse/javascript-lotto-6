import { Console } from "@woowacourse/mission-utils";
import { message } from "../constants";

const input = {
  enterPaymenteAmount: async function () {
    return await Console.readLineAsync(message.ENTER_PAYMENT_AMOUNT);
  },

  enterWinningNumber: async function () {
    return await Console.readLineAsync(message.ENTER_WINNING_NUMBER);
  },

  enterBonusNumber: async function () {
    return await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
  },
};

export default input;
