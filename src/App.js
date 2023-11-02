import { View } from "./View/view.js";
import { Validator } from "./utils/validator.js";

class App {
  async play() {
    const amount = await this.setLottoConfig();
    // console.log(amount);
  }

  async setLottoConfig() {
    const purchaseAmount = await View.getAmount();

    if (Validator.isValidPurchaseAmount(purchaseAmount)) {
      return purchaseAmount;
    }

    throw Error("[ERROR]");
  }
}

export default App;
