import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import InputValidator from '../utils/InputValidator.js';
import LottoMachine from '../model/LottoMachine.js';
import LottoResult from '../model/LottoResult.js';

export default class LottoGameController {
  constructor() {
    this.lottoMachine = new LottoMachine();
  }

  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    const tickets = this.lottoMachine.generateTickets(purchaseAmount);
    OutputView.displayTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const lottoResult = new LottoResult(winningNumbers, bonusNumber, tickets);

    this.displayResults(lottoResult);
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const input = await InputView.getPurchaseAmount();
        InputValidator.validatePurchaseAmount(input);
        return input;
      } catch (error) {
        OutputView.displayError(error.message);
      }
    }
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const input = await InputView.getWinningNumbers();
        InputValidator.validateWinningNumbers(input);
        return input;
      } catch (error) {
        OutputView.displayError(error.message);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await InputView.getBonusNumber();
        InputValidator.validateBonusNumber(input, winningNumbers);
        return input;
      } catch (error) {
        OutputView.displayError(error.message);
      }
    }
  }

  displayResults(lottoResult) {
    const resultStrings = lottoResult.getFormattedResultString();
    OutputView.displayResults(resultStrings);
    OutputView.displayProfitRate(lottoResult.calculateProfitRate());
  }
}
