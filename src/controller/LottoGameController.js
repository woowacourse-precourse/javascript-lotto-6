import InputView from "../view/InputView.js";
import InputValidator from "../utils/validator.js";
import OutputView from "../view/OutputView.js";
import Lottos from "../model/Lottos.js";
import Lotto from "../model/Lotto.js";
import BonusNumber from "../model/BonusNumber.js";
import Rank from "../model/Rank.js";
import { ErrorMessage, Rewards } from "../static/Constant.js";
class LottoGameController {
  #lottoTickets;
  #winningLotto;
  #bonusNumber;
  #rank;

  constructor() {}

  async startGame() {
    this.readPurchaseAmount();
  }

  readPurchaseAmount() {
    this.handlePurchaseAmountError();
  }

  async handlePurchaseAmountError() {
    while (true) {
      const amount = await InputView.purchaseAmount();
      try {
        InputValidator.purchaseAmount(amount);
        return this.setLottoTicket(amount);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  setLottoTicket(input) {
    this.#lottoTickets = new Lottos(+input / 1000);
    this.showLottoTicketCount();
  }

  showLottoTicketCount() {
    OutputView.printLottoTicketCount(this.#lottoTickets.getCount());
    this.showLottoTickets();
  }

  showLottoTickets() {
    OutputView.printLottoTickets(this.#lottoTickets.getLottos());
    this.readWinningNumber();
  }

  readWinningNumber() {
    this.handleWinningNumberError();
  }

  async handleWinningNumberError() {
    while (true) {
      const input = await InputView.lottoWinningNumber();
      try {
        if (input === "") throw new Error(ErrorMessage.LOTTO_LENGTH_ERROR);
        const numbers = input.split(",");
        InputValidator.winningNumber(numbers);
        this.#winningLotto = new Lotto(numbers);
        return this.readBonusNumber();
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  readBonusNumber() {
    this.handleBonusNumberError();
  }

  async handleBonusNumberError() {
    while (true) {
      const number = await InputView.lottoBonusNumber();
      try {
        InputValidator.bonusNumber(number);
        this.#bonusNumber = new BonusNumber(number);
        this.#rank = new Rank(
          this.#lottoTickets,
          this.#bonusNumber,
          this.#winningLotto
        );
        await this.#rank.initRank();
        return this.showLottoWinningStatistics();
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
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
      profit = profit + rank[i] * Rewards[i];
    }
    return (profit / principal) * 100;
  }
}

export default LottoGameController;
