import View from '../views/View';
import LottoPublisher from '../models/LottoPublisher';
import LottoService from '../models/LottoService';
import LottoResultCalculator from '../models/LottoResultCalculator';

class LottoGameController {
  #view = new View();

  #lottoPublisher = new LottoPublisher();

  #lottoService;

  constructor() {
    const resultCalculator = new LottoResultCalculator();
    this.#lottoService = new LottoService(resultCalculator);
  }

  async executeLottoGame() {
    await this.#purchaseLottos();
    await this.#ensureWinningNumbersInput();
    await this.#ensureBonusNumberInput();
    const { results, profitRate } = this.#executeLottoMatch();
    this.#displayLottoResult(results, profitRate);
  }

  async #retryOnFailure(readFunction, setFunction) {
    try {
      const input = await readFunction();
      setFunction(input);
      return input;
    } catch (error) {
      this.#view.printError(error);
      return this.#retryOnFailure(readFunction, setFunction);
    }
  }

  #setMoneyAmount(moneyAmount) {
    this.#lottoPublisher.setMoneyAmount(moneyAmount);
  }

  #setWinningNumbers(winningNumbers) {
    this.#lottoService.setWinningNumbers(winningNumbers);
    this.#view.printNewLine();
  }

  #setBonusNumber(bonusNumber) {
    this.#lottoService.setBonusNumber(bonusNumber);
    this.#view.printNewLine();
  }

  async #ensureMoneyAmountInput() {
    return this.#retryOnFailure(
      this.#view.readMoneyAmount.bind(this.#view),
      this.#setMoneyAmount.bind(this),
    );
  }

  async #ensureWinningNumbersInput() {
    return this.#retryOnFailure(
      this.#view.readWinningNumbers.bind(this.#view),
      this.#setWinningNumbers.bind(this),
    );
  }

  async #ensureBonusNumberInput() {
    return this.#retryOnFailure(
      this.#view.readBonusNumber.bind(this.#view),
      this.#setBonusNumber.bind(this),
    );
  }

  async #purchaseLottos() {
    await this.#ensureMoneyAmountInput();
    const tickets = this.#lottoPublisher.publishLottos();
    this.#lottoService.setLottoTickets(tickets);
    this.#view.printLottoPurchaseResult(tickets);
  }

  #executeLottoMatch() {
    const results = this.#lottoService.calculateResults();
    const profitRate = this.#lottoService.calculateProfitRate();
    return { results, profitRate };
  }

  #displayLottoResult(results, profitRate) {
    this.#view.printLottoStats(results);
    this.#view.printProfitRate(profitRate);
  }
}

export default LottoGameController;
