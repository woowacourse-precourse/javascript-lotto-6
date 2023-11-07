import { Console } from "@woowacourse/mission-utils";
import { ASK } from "../const/Messages.js";

export const ask = {
  async payment() {
    return await Console.readLineAsync(ASK.INPUT_MONEY);
  },

  async baseNumbers() {
    return await Console.readLineAsync(ASK.INPUT_NUMBERS);
  },

  async bonusNumber() {
    return await Console.readLineAsync(ASK.INPUT_BONUS);
  },
};
