import { GUIDE_MESSAGE, WINNING_AMOUNTS } from './constants/constants'
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
    this.requestLottoTickets()
    await this.requestWinningNumbers();
    await this.requestBonusNumber();
    this.requestResult();
  }

  async requestPurchaseAmounts() {
    this.output.print(GUIDE_MESSAGE.insertMoney)
    
    let valid = false;

    while (!valid) {
      const INPUT = await this.input.getValue('')

      this.lottos = new LottoTickets(String(INPUT));
      const isValid = this.lottos.returnMoney()

      if (isValid) {
        valid = true
        this.#money = String(INPUT)
      }
    }
  }

  requestLottoTickets() {
    this.tickets = new LottoTickets(this.#money);
    
    this.tickets.publishTickets();
    this.#lottos = this.tickets.returnTickets();

    this.output.printTickets(this.#money / 1000)
    this.output.printLotto(this.#lottos)
  }

  async requestWinningNumbers() {
    this.output.print(GUIDE_MESSAGE.insertWinnerNumbers)

    let valid = false;

    while (!valid) {
      const INPUT = await this.input.getValue('')

      this.lotto = new Lotto(String(INPUT));
      const isValid = this.lotto.returnValue();

      if (isValid) {
        valid = true
        this.#winningNumbers = String(INPUT).split(',')
      }
    }
  }

  async requestBonusNumber() {
    let valid = false;

    this.output.print(GUIDE_MESSAGE.insertBonusNumber)

    while (!valid) {
      const INPUT = await this.input.getValue(GUIDE_MESSAGE.insertBonusNumber);

      this.bonus = new BonusNumber(String(INPUT), String(this.#winningNumbers))
      const isValid = this.bonus.returnValue();

      if (isValid) {
        valid = true
        this.#bonusNumber = String(INPUT).split(',')
      }
    }
  }

  requestResult() {
    this.lotto = new Lotto(this.#winningNumbers);
    const STATS = this.lotto.calculateWinningStats(this.#lottos, this.#bonusNumber);
    
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