import BonusNumber from './BonusNumber.js';
import Lotto from './Lotto.js';
import LottoTickets from './LottoTickets.js';
import Input from './View/Input.js'
import Output from './View/Output.js'

class App {
  #money
  #lottos
  #bonusNumber
  #winningNumbers

  constructor() {
    this.#money = 0;
    this.#lottos = [];
    this.#bonusNumber = 0;
    this.#winningNumbers = [];
    this.input = new Input();
    this.output = new Output();
  }

  async play() {
    await this.requestPurchaseAmounts();
    await this.requestWinningNumbers();
     await this.requestBonusNumber();
     this.requestResult();
  }

  async requestPurchaseAmounts() {    
    try {
      const INPUT = await this.input.getPurchaseAmount();
      
      this.lottos = new LottoTickets(String(INPUT));
      this.#money = this.lottos.returnMoney()

      this.#lottos = this.lottos.publishTickets();
    } catch (error) {
      this.output.printError(error.message)
      await this.requestPurchaseAmounts();
    }
  }

  async requestWinningNumbers() {
    try {
      const INPUT = await this.input.getWinningNumbers();

      this.lotto = new Lotto(String(INPUT));
      this.#winningNumbers = this.lotto.returnWinningNumbers();
    } catch (error) {
      this.output.printError(error.message)
      await this.requestWinningNumbers();
    }
  }

  async requestBonusNumber() {
    try {
      const INPUT = await this.input.getBonusNumber();

      this.bonus = new BonusNumber(String(INPUT), this.#winningNumbers)
      this.#bonusNumber = this.bonus.returnValue();
    } catch (error) {
      this.output.printError(error.message)
    }
  }

  requestResult() {
    this.lotto = new Lotto(this.#winningNumbers);
    const STATS = this.lotto.calculateWinningStats(this.#lottos, [...this.#winningNumbers, this.#bonusNumber]);
    const profits = this.lotto.getProfits(STATS)
    const rate = this.lotto.calculateRate(profits, this.#money)
    
    this.output.printStats(STATS)
    this.output.printRate(rate);
  }
}

export default App;