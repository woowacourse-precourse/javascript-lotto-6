import { View } from "./View/view.js";
import { ERORR_MESSAGE } from "./constants/message.js";
import { setPurchaseLotto } from "./module/setting.js";
import { Validator } from "./utils/validator.js";

class App {
  async play() {
    const { purchaseAmount, lottoArray } = await this.setLottoConfig();
    View.showPurchaseLotto(purchaseAmount, lottoArray);

    const winnerLotto = await View.getWinnerNumber();
    console.log(winnerLotto.numbers);
    const bonus = await View.getBonusNumber(winnerLotto.numbers);
    console.log(bonus.number);
  }

  async setLottoConfig() {
    const purchaseAmount = await View.getAmount();

    if (!Validator.isValidPurchaseAmount(purchaseAmount)) {
      throw Error(ERORR_MESSAGE.purchaseError);
    }

    const lottoArray = setPurchaseLotto(purchaseAmount);
    return { purchaseAmount, lottoArray };
  }
}

export default App;
