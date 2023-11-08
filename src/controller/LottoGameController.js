import InputView from '../View/InputView.js';
import Inputs from '../Inputs.js';
import Lotto from '../Lotto.js';
import OutputView from '../View/OutputView.js';
import CalculateStats from '../CalculateStats.js';
import { LOTTO_NUMBER, OUTPUT_MESSAGE } from '../constants.js';

class LottoGameController {
  #purchaseAmount = 0;

  #numLottoTickets = 0;

  #winningNumbers = { winningNumbers: [], bonusNumber: 0 };

  #lottoNumbers = [];

  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.inputs = new Inputs(this.inputView, this.outputView);
    this.calculateStats = new CalculateStats();
  }

  async gameStart() {
    await this.initializeGame();
    this.playLottoGame();
  }

  async initializeGame() {
    await this.initPurchase();
    this.initLottoTickets();
    await this.initWinningNumbers();
    this.outputView.printGetNumbersOrMessage(OUTPUT_MESSAGE.statisticsMessage);
  }

  async initPurchase() {
    this.#purchaseAmount = await this.inputs.returnPurchaseAmount();
    this.#numLottoTickets = this.getNumberOfLottoTickets(this.#purchaseAmount);
    this.outputView.printNumLottoTickets(this.#numLottoTickets);
  }

  initLottoTickets() {
    this.#lottoNumbers = this.generateLottoTickets();
  }

  async initWinningNumbers() {
    this.#winningNumbers = await this.inputs.returnWinningNumbers();
  }

  playLottoGame() {
    this.calculateWinningStats();
    this.outputView.printWinningStats(this.calculateStats.stats);
    this.printEarningsRate();
  }

  getNumberOfLottoTickets(purchaseAmount) {
    return Math.floor(purchaseAmount / LOTTO_NUMBER.minPrice);
  }

  generateLottoTickets() {
    return Array.from({ length: this.#numLottoTickets }, () => this.generateSingleLottoTicket());
  }

  generateSingleLottoTicket() {
    const lotto = new Lotto();
    const lottoNumbers = lotto.getNumbers();
    const formattedLottoNumbers = `[${lottoNumbers.join(', ')}]`;
    this.outputView.printGetNumbersOrMessage(formattedLottoNumbers);
    return lottoNumbers;
  }

  calculateMatchingNumbersCount(ticket) {
    return this.calculateStats.countMatchingNumbers(ticket, this.#winningNumbers.winningNumbers);
  }

  calculateBonusMatch(ticket) {
    return this.calculateStats.checkBonusMatch(ticket, this.#winningNumbers.bonusNumber);
  }

  updateStats(matchingNumbersCount, bonusMatch) {
    this.calculateStats.stats = this.calculateStats.updateStats(
      this.calculateStats.stats,
      matchingNumbersCount,
      bonusMatch,
    );
  }

  calculateWinningStats() {
    this.#lottoNumbers.forEach((ticket) => {
      const matchingNumbersCount = this.calculateMatchingNumbersCount(ticket);
      const bonusMatch = this.calculateBonusMatch(ticket);
      this.updateStats(matchingNumbersCount, bonusMatch);
    });
  }

  printEarningsRate() {
    const earningsRate = this.calculateStats.calculateEarningsRate(this.#purchaseAmount);
    this.outputView.printEarningsRate(earningsRate);
  }
}

export default LottoGameController;
