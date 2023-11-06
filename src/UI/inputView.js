import { Console } from "@woowacourse/mission-utils";
import { ASK } from "../const/Messages.js";

export const ask = {
  async payment() {
    await Console.readLineAsync(ASK.INPUT_MONEY);
  },

  async baseNumbers() {
    await Console.readLineAsync(ASK.INPUT_NUMBERS);
  },

  async bonusNumber() {
    await Console.readLineAsync(ASK.INPUT_BONUS);
  },
};
