import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import Lotto from "../Lotto.js";
import OutputView from "../view/OutputView.js";
class LottoGameController {
  #lotto;
  #purchaseAmount;

  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    await InputView.purchaseAmount((input) => {
      this.handleError(input);
    });
  }

  async handleError(input) {
    try {
      InputValidator.purchaseAmount(input);
      this.showLottoTicketCount(input);
    } catch (error) {
      console.log(error);
      this.readPurchaseAmount();
    }
  }

  showLottoTicketCount(input) {
    this.#purchaseAmount = +input / 1000;
    OutputView.printLottoTicketCount(this.#purchaseAmount);
  }
}

export default LottoGameController;
