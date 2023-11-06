import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
class LottoGameController {
  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    await InputView.purchaseAmount((input) => {
      this.handleError(input);
      this.printPurchaseAmount(input);
    });
  }

  handleError(input) {
    try {
      InputValidator.purchaseAmount(input);
    } catch (error) {
      console.log(error);
      this.readPurchaseAmount();
    }
  }

  printPurchaseAmount(amount) {
    console.log(amount);
  }
}

export default LottoGameController;
