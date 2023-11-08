import LottoController from "./LottoController.js";
import Lotto from "./Lotto.js";
import LottoPrizeManager from "./LottoPrizeManager.js";
import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";
import WinningNumber from "./WinningNumber.js";
import BonusNumber from "./BonusNumber.js";

class App {
  #totalMoney;
  #lottoController;
  #winningNumber;
  #bonusNumber;
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

  async #initializeWinningNumberController() {
    try {
      const winningNumberString = await InputHandler.getWinningNumberString();
      this.#winningNumber = new WinningNumber(winningNumberString);
    } catch (e) {
      OutputHandler.printErrorMessage(e);
      await this.#initializeWinningNumberController();
    }
  }

  async #initializeBonusNumberController() {
    try {
      const bonusNumberString = await InputHandler.getBonusNumberString();
      this.#bonusNumber = new BonusNumber(
        this.#winningNumber.numberArray,
        bonusNumberString
      );
    } catch (e) {
      OutputHandler.printErrorMessage(e);
      await this.#initializeBonusNumberController();
    }
  }

  async #initializePrizeManager() {
    this.#prizeManager = new LottoPrizeManager();
  }

  #calculateLottoRankResult() {
    const lottoArray = this.#lottoController.lottoArray.map(
      (lotto) => lotto.numbers
    );

    return this.#prizeManager.calculateAllLottoRank({
      lottoArray,
      winningNumbers: this.#winningNumber.numberArray,
      bonusNumber: this.#bonusNumber.number,
    });
  }

  #calculateProfitRate(rankResult) {
    return LottoPrizeManager.calculateProfitRate({
      rankResult,
      totalMoney: +this.#totalMoney,
    });
  }

  #printLottoPrizeResult() {
    const rankResult = this.#calculateLottoRankResult();
    const profitRate = this.#calculateProfitRate(rankResult);

    OutputHandler.printPrizeResult({ rankResult, profitRate });
  }

  async play() {
    await this.#initializeLottoController();
    this.#printLottoTickets();

    await this.#initializeWinningNumberController();
    await this.#initializeBonusNumberController();
    await this.#initializePrizeManager();

    this.#printLottoPrizeResult();
  }
}

export default App;
