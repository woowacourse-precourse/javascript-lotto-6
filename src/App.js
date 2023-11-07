import { print } from "./common/utils.js";
import { validatePurchaseInput } from "./common/validation.js";
import { purchaseAmountInput } from "./view/inputView.js";

class App {
  async play() {
    this.startLotto();
  }

  async startLotto() {
    const inputPurchaseAmount = await purchaseAmountInput();
    this.validateInput(inputPurchaseAmount);
  }

  async validateInput(inputPurchaseAmount) {
    validatePurchaseInput(inputPurchaseAmount);
  }
}

export default App;
