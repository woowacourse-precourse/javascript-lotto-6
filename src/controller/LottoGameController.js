import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import OutputView from "../view/OutputView.js";
import Lottos from "../model/Lottos.js";
import Lotto from "../model/Lotto.js";
import BonusNumber from "../model/BonusNumber.js";
import Rank from "../model/Rank.js";
import { Rewards } from "../static/Constant.js";
class LottoGameController {
  #lottoTickets;
  #winningLotto;
  #bonusNumber;
  #rank;

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
      OutputView.printErrorMessage(error.message);
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
      OutputView.printErrorMessage(error.message);
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
      this.#rank = new Rank(
        this.#lottoTickets,
        this.#bonusNumber,
        this.#winningLotto
      );
      this.showLottoWinningStatistics();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      const input = await InputView.lottoBonusNumber();
      await this.handleBonusNumberError(input);
    }
  }

  showLottoWinningStatistics() {
    const rank = this.#rank.getRank();
    const proift = this.getLottoProfit(rank).toFixed(1);
    OutputView.printLottoWinningStatistics(rank, proift);
  }

  getLottoProfit(rank) {
    const principal = 1000 * this.#lottoTickets.getCount();
    let profit = 0;
    for (let i = 0; i < 5; i++) {
      profit += rank[i] * Rewards[i];
    }
    return (profit / principal) * 100;
  }
}

export default LottoGameController;
