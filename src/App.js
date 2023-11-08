import LottoController from "./LottoController.js";
import Lotto from "./Lotto.js";
import LottoPrizeManager from "./LottoPrizeManager.js";
import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";

class App {
  #totalMoney;
  #lottoController;
  #prizeManager;

  async #initializeLottoController() {
    try {
      this.#totalMoney = await InputHandler.getUserTotalMoney();
      this.#lottoController = new LottoController(
        this.#totalMoney,
        (number) => {
          return new Lotto(number);
        }
      );
    } catch (e) {
      OutputHandler.printErrorMessage(e);
      await this.#initializeLottoController();
    }
  }

  #printLottoTickets() {
    const ticketCount = this.#lottoController.lottoArray.length;
    OutputHandler.printLottoTicketCount(ticketCount);
    OutputHandler.printAllLottoNumbers(
      this.#lottoController.lottoArray.map((lotto) => lotto.numbers)
    );
  }

  async #initializePrizeManager() {
    try {
      const winningNumberString = await InputHandler.getWinningNumberString();
      const bonusNumberString = await InputHandler.getBonusNumberString();

      this.#prizeManager = new LottoPrizeManager(
        winningNumberString,
        bonusNumberString
      );
    } catch (e) {
      OutputHandler.printErrorMessage(e);
      await this.#initializePrizeManager();
    }
  }

  #calculateLottoPrizeResult() {
    const rankResult = this.#prizeManager.calculateAllLottoRank(
      this.#lottoController.lottoArray.map((lotto) => lotto.numbers)
    );

    const profitRate = LottoPrizeManager.calculateProfitRate({
      rankResult,
      totalMoney: +this.#totalMoney,
    });

    OutputHandler.printPrizeResult({ rankResult, profitRate });
  }

  async play() {
    await this.#initializeLottoController();
    this.#printLottoTickets();

    await this.#initializePrizeManager();
    this.#calculateLottoPrizeResult();
  }
}

export default App;
