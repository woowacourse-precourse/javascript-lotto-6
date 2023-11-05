import InputView from "./View/InputView.js";
import Lotto from "./Model/Lotto.js";
import Validator from "./Validator.js";

class App {
  async play() {
    await this.initializePurchaseAmount();
  }

  async initializePurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);

    this.lotto = new Lotto(purchaseAmount);
    console.log(this.lotto.getLotteries());
  }
}

export default App;
