import { LOTTO_PRICE } from './Constants.js';
import InputManager from './UI/InputManager.js';
import OutputManager from './UI/OutputManager.js';
import { validatePurchaseAmountInput } from './Validation.js';

class App {
  constructor() {
    this.inputManager = new InputManager();
    this.outputManager = new OutputManager();
    this.purchaseAmountInput = '';
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    const numberOfLottos = this.getNumberOfLottos(purchaseAmount);
  }

  async getPurchaseAmount() {
    this.purchaseAmountInput = await this.inputManager.enterPurchaseAmount();
    try {
      await validatePurchaseAmountInput(this.purchaseAmountInput);
    } catch (e) {
      await this.outputManager.printPurchaseAmountInputErrorMessage(e.message);
      await this.getPurchaseAmount();
    }
    return Number(this.purchaseAmountInput);
  }

  getNumberOfLottos(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }
}

export default App;
