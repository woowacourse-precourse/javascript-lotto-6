import { WINNING_AMOUNTS } from './constants/constants'
import LottoTickets from './LottoTickets';
import BonusNumber from './BonusNumber'
import Input from './view/Input';
import Output from './view/Output';
import Lotto from './Lotto';

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
    const STATS = this.lotto.calculateWinningStats(this.#lottos, this.#winningNumbers,  this.#bonusNumber);
    
    this.output.printStats(STATS)
    this.requestRate(STATS, this.#money)
  }

  requestRate(STATS, money) {
    const PRIZE_MONEYS = Object.values(WINNING_AMOUNTS).map(Number)
    let profits = 0;

    STATS.forEach((n, i) => {
      if (n > 0) {
        profits += PRIZE_MONEYS[4 - i]
      }
    })

    this.output.printRate(profits / money);
  }
}

export default App;