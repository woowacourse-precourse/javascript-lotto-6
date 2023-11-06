import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import Lotto from "../Lotto.js";
class LottoGameController {
  #lotto;
  #purchaseAmount;

  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  getNumberOfLottoTickets(input) {
    this.#purchaseAmount = +input % 1000;
  }

  async readPurchaseAmount() {
    await InputView.purchaseAmount((input) => {
      this.handleError(input);
    });
  }

  async handleError(input) {
    try {
      InputValidator.purchaseAmount(input);
      this.getNumberOfLottoTickets(input);
    } catch (error) {
      console.log(error);
      this.readPurchaseAmount();
    }
  }
}

export default LottoGameController;
