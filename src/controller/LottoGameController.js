import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import InputValidator from '../utils/InputValidator';
import LottoMachine from '../model/LottoMachine';
import LottoResult from '../model/LottoResult';

export default class LottoGameController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async start() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const tickets = this.#generateTickets(purchaseAmount);
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
    const lottoResult = this.#evaluateResults(winningNumbers, bonusNumber, tickets);
    this.#displayResults(lottoResult);
  }

  async #getInput(inputFunction) {
    return inputFunction();
  }

  async #getValidatedInput(inputFunction, validationFunction) {
    while (true) {
      try {
        const input = await this.#getInput(inputFunction);
        validationFunction(input);
        return input;
      } catch (error) {
        OutputView.displayError(error.message);
      }
    }
  }

  async #getPurchaseAmount() {
    return this.#getValidatedInput(
      InputView.getPurchaseAmount,
      InputValidator.validatePurchaseAmount,
    );
  }

  #generateTickets(purchaseAmount) {
    const tickets = this.#lottoMachine.generateTickets(purchaseAmount);
    OutputView.displayTickets(tickets);
    return tickets;
  }

  async #getWinningNumbers() {
    return this.#getValidatedInput(
      InputView.getWinningNumbers,
      InputValidator.validateWinningNumbers,
    );
  }

  async #getBonusNumber(winningNumbers) {
    return this.#getValidatedInput(
      () => InputView.getBonusNumber(winningNumbers),
      (bonusNumber) => InputValidator.validateBonusNumber(bonusNumber, winningNumbers),
    );
  }

  #evaluateResults(winningNumbers, bonusNumber, tickets) {
    return new LottoResult(winningNumbers, bonusNumber, tickets);
  }

  #displayResults(lottoResult) {
    const resultStrings = lottoResult.getFormattedResultString();
    OutputView.displayResults(resultStrings);
    OutputView.displayProfitRate(lottoResult.calculateProfitRate());
  }
}
