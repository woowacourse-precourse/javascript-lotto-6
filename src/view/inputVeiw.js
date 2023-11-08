import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants.js";
import Purchase from "../errors/Purchase.js";
import Lotto from "../errors/Lotto.js";
import Bonus from "../errors/Bonus.js";

export const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      CONSOLE_MESSAGE.PURCHASE_AMOUNT_INPUT + "\n"
    );
    new Purchase(purchaseAmount);

    return purchaseAmount;
  },

  async readMainLotto() {
    const mainLotto = await Console.readLineAsync(
      CONSOLE_MESSAGE.WINNING_LOTTO_INPUT + "\n"
    );
    const testArr = mainLotto.split(",");

    new Lotto(testArr);

    return testArr;
  },

  async readBonusLotto(mainLottoArr) {
    const bonusLotto = await Console.readLineAsync(
      CONSOLE_MESSAGE.BONUS_LOTTO_INPUT + "\n"
    );
    new Bonus([mainLottoArr, bonusLotto]);

    return Number(bonusLotto);
  },
};
