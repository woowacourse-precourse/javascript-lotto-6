import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import Lotto from "../Lotto.js";
import OutputView from "../view/OutputView.js";
import lottoNumberGenerator from "../utils/RandomNumberGenerator.js";
class LottoGameController {
  #lotto = [];
  #purchaseAmount;
  #lottoTicket;

  constructor() {}

  async startGame() {
    await this.readPurchaseAmount();
    await this.handleError(this.#purchaseAmount);
    this.showLottoTicketCount();
    this.setLottoNumbers();
    this.showLottoNumbers();
  }

  async readPurchaseAmount() {
    this.#purchaseAmount = await InputView.purchaseAmount();
  }

  async handleError(amount) {
    try {
      InputValidator.purchaseAmount(amount);
      this.#purchaseAmount = amount;
      this.setLottoTicketCount(amount);
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.readPurchaseAmount();
      await this.handleError(this.#purchaseAmount);
    }
  }

  setLottoTicketCount(input) {
    this.#lottoTicket = +input / 1000;
  }

  showLottoTicketCount() {
    OutputView.printLottoTicketCount(this.#lottoTicket);
  }

  setLottoNumbers() {
    for (let i = 0; i < this.#lottoTicket; i++) {
      const numbers = lottoNumberGenerator.generate();
      this.#lotto[i] = new Lotto(numbers);
    }
  }

  showLottoNumbers() {
    for (let i = 0; i < this.#lottoTicket; i++) {
      const numbers = this.#lotto[i].getTicketNumbers();
      OutputView.printLottoNumbers(numbers);
    }
  }
}

export default LottoGameController;
