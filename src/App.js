import InputView from "./View/InputView";
import Lotto from "./Model/Lotto";
import Validator from "./Validator";

class App {
  async play() {
    await this.initializePurchaseAmount();
  }

  async initializePurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);

    this.lotto = new Lotto(purchaseAmount);
  }
}

export default App;
