import InputView from './View/InputView.js';
import Inputs from './Inputs.js';
import Lotto from './Lotto.js';
import { OUTPUT_MESSAGE } from './constants.js';
import OutputView from './View/OutputView.js';
import CalculateStats from './CalculateStats.js';

class App {
  #purchaseAmount;

  #numLottoTickets;

  #winningNumbers;

  #lottoNumbers;

  constructor() {
    this.inputs = new Inputs();
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.calculateStats = new CalculateStats();
    this.#purchaseAmount = 0;
    this.#numLottoTickets = 0;
  }

  async play() {
    this.#purchaseAmount = await this.inputs.returnPurchaseAmount();
    this.#numLottoTickets = this.getNumberOfLottoTickets(this.#purchaseAmount);
    this.outputView.printNumLottoTickets(this.#numLottoTickets);
    this.generateLottoTickets();
    this.#winningNumbers = await this.inputs.returnWinningNumbers();
    this.outputView.printMessage(OUTPUT_MESSAGE.statisticsMessage);
    this.calculateWinningStats();
    this.outputView.printWinningStats(this.calculateStats.stats);
    this.printEarningsRate();
  }

  getNumberOfLottoTickets(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  generateLottoTickets() {
    this.#lottoNumbers = Array.from({ length: this.#numLottoTickets }, () => {
      const lotto = new Lotto();
      const lottoNumbers = lotto.getNumbers();
      const formattedLottoNumbers = `[${lottoNumbers.join(', ')}]`;
      this.outputView.printGetNumbers(formattedLottoNumbers);
      return lottoNumbers;
    });
  }

  calculateWinningStats() {
    this.calculateStats.stats = { ...this.calculateStats.stats };

    this.#lottoNumbers.forEach((ticket) => {
      const matchingNumbersCount = this.calculateStats.countMatchingNumbers(
        ticket,
        this.#winningNumbers.winningNumbers,
      );
      const bonusMatch = this.calculateStats.checkBonusMatch(ticket, this.#winningNumbers.bonusNumber);
      this.calculateStats.stats = this.calculateStats.updateStats(
        this.calculateStats.stats,
        matchingNumbersCount,
        bonusMatch,
      );
    });

    return this.calculateStats.stats;
  }

  printEarningsRate() {
    const earningsRate = this.calculateStats.calculateEarningsRate(this.#purchaseAmount);
    this.outputView.printEarningsRate(earningsRate);
  }
}

export default App;
