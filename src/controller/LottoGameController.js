import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import OutputView from "../view/OutputView.js";
import Lottos from "../model/Lottos.js";
import Lotto from "../model/Lotto.js";
import BonusNumber from "../model/BonusNumber.js";
class LottoGameController {
  #lottoTickets;
  #winningLotto;
  #bonusNumber;

  constructor() {}

  async startGame() {
    await this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    const input = await InputView.purchaseAmount();
    await this.handlePurchaseAmountError(input);
  }

  async handlePurchaseAmountError(amount) {
    try {
      InputValidator.purchaseAmount(amount);
      this.setLottoTicket(amount);
    } catch (error) {
      OutputView.printErrorMessage(error);
      const input = await InputView.purchaseAmount();
      await this.handlePurchaseAmountError(input);
    }
  }

  setLottoTicket(input) {
    this.#lottoTickets = new Lottos(+input / 1000);
    this.showLottoTicketCount();
  }

  showLottoTicketCount() {
    OutputView.printLottoTicketCount(this.#lottoTickets.getCount());
    this.showLottoTicekts();
  }

  showLottoTicekts() {
    OutputView.printLottoTickets(this.#lottoTickets.getLottos());
    this.readWinningNumber();
  }

  async readWinningNumber() {
    const input = await InputView.lottoWinningNumber();
    await this.handleWinningNumberError(input);
  }

  async handleWinningNumberError(numbers) {
    try {
      InputValidator.winningNumber(numbers);
      this.#winningLotto = new Lotto(numbers);
      this.readBonusNumber();
    } catch (error) {
      OutputView.printErrorMessage(error);
      const input = await InputView.lottoWinningNumber();
      await this.handleWinningNumberError(input);
    }
  }

  async readBonusNumber() {
    const input = await InputView.lottoBonusNumber();
    await this.handleBonusNumberError(input);
  }

  async handleBonusNumberError(number) {
    try {
      InputValidator.bonusNumber(this.#winningLotto.getTicketNumbers(), number);
      this.#bonusNumber = new BonusNumber(number);
    } catch (error) {
      OutputView.printErrorMessage(error);
      const input = await InputView.lottoBonusNumber();
      await this.handleBonusNumberError(input);
    }
  }
}

export default LottoGameController;
