import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/message.js";

export const View = {
  async getAmount() {
    const amount = await Console.readLineAsync(
      inputMessage.requestPurchaseAmount
    );
    return amount;
  },
};
