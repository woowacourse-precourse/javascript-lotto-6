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
    try {
      const purchaseAmount = await this.getValidatedInput(
        InputView.getPurchaseAmount,
        InputValidator.validatePurchaseAmount,
      );

      const tickets = this.lottoMachine.generateTickets(purchaseAmount);
      OutputView.displayTickets(tickets);

      const winningNumbers = await this.getValidatedInput(
        InputView.getWinningNumbers,
        InputValidator.validateWinningNumbers,
      );

      const bonusNumber = await this.getValidatedInput(InputView.getBonusNumber, (inputNumber) =>
        InputValidator.validateBonusNumber(inputNumber, winningNumbers),
      );

      const lottoResult = new LottoResult(winningNumbers, bonusNumber, tickets);

      this.displayResults(lottoResult);
    } catch (error) {
      OutputView.displayError(error.message);
      await this.start();
    }
  }

  async getValidatedInput(inputFunction, validationFunction) {
    while (true) {
      try {
        const input = await inputFunction();
        validationFunction(input);
        return input;
      } catch (error) {
        OutputView.displayError(error.message);
      }
    }
  }

  displayResults(lottoResult) {
    lottoResult.calculateResults();
    const resultStrings = lottoResult.getFormattedResultString();
    OutputView.displayResults(resultStrings);
    OutputView.displayProfitRate(lottoResult.calculateProfitRate());
  }
}
