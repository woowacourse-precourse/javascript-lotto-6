import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import Lotto from "../Lotto.js";
import OutputView from "../view/OutputView.js";
import lottoNumberGenerator from "../utils/RandomNumberGenerator.js";
class LottoGameController {
  #lotto = [];
  #purchaseAmount;

  constructor() {}

  async startGame() {
    await this.readPurchaseAmount();
    this.setLottoTicketNumbers();
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

  setLottoTicketNumbers() {
    for (let i = 0; i < this.#purchaseAmount; i++) {
      const numbers = lottoNumberGenerator.generate();
      this.#lotto[i] = new Lotto(numbers);
    }
  }
}

export default LottoGameController;
