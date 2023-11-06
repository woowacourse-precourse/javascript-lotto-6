import { Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { LOTTO } from "../constants/lotto.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/message.js";

export const View = {
  async getAmount() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.requestPurchaseAmount
    );
    return amount;
  },

  async getWinnerNumber() {
    const winnerNumber = await Console.readLineAsync(
      INPUT_MESSAGE.requestWinnerNumber
    );

    const lotto = new Lotto(winnerNumber);

    return lotto;
  },

  async showPurchaseLotto(purchaseAmount, lottoArray) {
    Console.print(
      OUTPUT_MESSAGE.purchaseConfirmation(purchaseAmount / LOTTO.price)
    );
    lottoArray.forEach((lotto) => {
      Console.print(lotto);
    });
  },
};
