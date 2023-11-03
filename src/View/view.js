import { Console } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/lotto.js";
import { inputMessage, outputMessage } from "../constants/message.js";

export const View = {
  async getAmount() {
    const amount = await Console.readLineAsync(
      inputMessage.requestPurchaseAmount
    );
    return amount;
  },

  async showPurchaseLotto(purchaseAmount, lottoArray) {
    Console.print(
      outputMessage.purchaseConfirmation(purchaseAmount / LOTTO.price)
    );
    lottoArray.forEach((lotto) => {
      Console.print(lotto);
    });
  },
};
