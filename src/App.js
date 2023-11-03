import { View } from "./View/view.js";
import { Validator } from "./utils/validator.js";

class App {
  async play() {
    const { purchaseAmount, lottoArray } = await this.setLottoConfig();
    View.showPurchaseLotto(purchaseAmount, lottoArray);
  }

  async setLottoConfig() {
    const purchaseAmount = await View.getAmount();

    if (!Validator.isValidPurchaseAmount(purchaseAmount)) {
      throw Error("[ERROR]");
    }

    const lottoArray = setPurchaseLotto(purchaseAmount);
    return { purchaseAmount, lottoArray };
  }
}

export default App;
