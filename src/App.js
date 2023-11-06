import { Console } from "@woowacourse/mission-utils";
import { View } from "./View/view.js";
import { ERROR_MESSAGE } from "./constants/message.js";
import { setPurchaseLotto } from "./module/setting.js";
import { Validator } from "./utils/validator.js";

class App {
  async play() {
    const { purchaseAmount, lottoArray } = await this.setLottoConfig();
    View.displayPurchaseLotto(purchaseAmount, lottoArray);

    const winnerLotto = await View.getWinnerNumber();

    const bonus = await View.getBonusNumber(winnerLotto.numbers);

    const statics = View.displayWinningStatics(
      lottoArray,
      winnerLotto.numbers,
      bonus.number
    );

    View.displayProfit(statics, purchaseAmount);
  }

  async setLottoConfig() {
    while (true) {
      try {
        const purchaseAmount = await View.getAmount();

        if (!Validator.isValidPurchaseAmount(purchaseAmount)) {
          throw new Error(ERROR_MESSAGE.purchaseError);
        }

        const lottoArray = setPurchaseLotto(purchaseAmount);
        return { purchaseAmount, lottoArray };
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
