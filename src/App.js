import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import LottoGenerator from "./LottoGenerator.js";
import { WinningRecord } from "./WinningRecord.js";
import { LottoTicketValidator } from "./LottoTicketValidator.js";

class App {
  #lottoGenerator = new LottoGenerator();

  async play() {
    const tickets = await this.purchaseLotto();
    OutputView.printPurchaseLottoTickets(tickets);

    const winningNumbers = await this.pickWinningNumbers();
    const bonusNumber = await this.pickBonusNumber();
    const winningRecord = new WinningRecord(winningNumbers, bonusNumber);

    const winningStatistics = winningRecord.getWinningStatistics(tickets);
    OutputView.printWinningStatistics(winningStatistics);
    OutputView.printRateOfReturn(
      winningRecord.getRateOfReturn(tickets, winningStatistics)
    );
  }

  async purchaseLotto() {
    try {
      const price = await InputView.readPurchasePrice();
      return this.#lottoGenerator.purchase(price);
    } catch (error) {
      OutputView.printError(error.message);
      return this.purchaseLotto();
    }
  }

  async pickWinningNumbers() {
    try {
      const winningNumbers = this.#parseWinningNumbers(
        await InputView.readWinningNumbers()
      );
      LottoTicketValidator.validateNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.pickWinningNumbers();
    }
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(",").map(Number);
  }

  async pickBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      LottoTicketValidator.validateNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return this.pickBonusNumbers();
    }
  }
}

export default App;
