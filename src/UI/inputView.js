import { Console } from "@woowacourse/mission-utils";
import { ASK } from "../const/Messages.js";

export const input = {
  async money() {
    await Console.readLineAsync(ASK.INPUT_MONEY);
  },

  async numbers() {
    await Console.readLineAsync(ASK.INPUT_NUMBERS);
  },

  async bonus() {
    await Console.readLineAsync(ASK.INPUT_BONUS);
  },
};
