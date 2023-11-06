import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";

class LottoGameController {
  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    await InputView.purchaseAmount((input) => {
      InputValidator.validatePurchaseAmount(input);
      printPurchaseAmount(input);
    });
  }

  printPurchaseAmount(amount) {
    console.log(amount);
  }
}

export default LottoGameController;
