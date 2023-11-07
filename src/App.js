import { RequestMessage, ResponseMessage } from './models/message.js';
import { LottoRule } from './models/rule.js';
import Util from './_shared/util.js';
import Purchase from './Purchase.js';
import Purchaser from './Purchaser.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Statistics from './Statistics.js';

class App {
  #purchase;
  #purchaser;
  #lotto;
  #bonus;
  #statistics;

  async play() {
    await this.#requestPurchase();
    this.#respondPurchaseResult();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumber();
    this.#respondWinningStatistics();
    this.#respondRateOfReturn();
  }

  async #requestPurchase() {
    try {
      const value = await Util.readLineAsyncConsole(`${RequestMessage.Purchase}\n`);
      Util.printConsole('');
      this.#purchase = new Purchase(value);
    } catch (e) {
      Util.printConsole(`${e.message}`);
      await this.#requestPurchase();
    }
  }

  #respondPurchaseResult() {
    const numberOfLotto = this.#purchase.amount / LottoRule.Price;
    Util.printConsole(`${numberOfLotto}${ResponseMessage.PurchaseResult}`);

    this.#purchaser = new Purchaser();
    for (let i = 0; i < numberOfLotto; i += 1) {
      const lotto = this.#purchaser.getLotto();
      Util.printConsole(`[${lotto.join(', ')}]`);
    }

    Util.printConsole('');
  }

  async #requestWinningNumbers() {
    try {
      const value = await Util.readLineAsyncConsole(`${RequestMessage.WinningNumbers}\n`);
      const numbers = value.split(',')
        .map(v => Number(v.trim()));

      Util.printConsole('');
      this.#lotto = new Lotto(numbers);
    } catch (e) {
      Util.printConsole(`${e.message}`);
      await this.#requestWinningNumbers();
    }
  }

  async #requestBonusNumber() {
    try {
      const value = await Util.readLineAsyncConsole(`${RequestMessage.BonusNumber}\n`);
      const number = Number(value);
      const winningNumbers = this.#lotto.numbers;

      Util.printConsole('');
      this.#bonus = new Bonus(winningNumbers, number);
    } catch (e) {
      Util.printConsole(`${e.message}`);
      await this.#requestBonusNumber();
    }
  }

  #respondWinningStatistics() {
    const winningNumbers = this.#lotto.numbers;
    const bonusNumber = this.#bonus.number;
    const { lottos } = this.#purchaser;

    this.#statistics = new Statistics(winningNumbers, bonusNumber, lottos);
    this.#statistics.stat.forEach(stat => {
      const message = this.#getStatisticsMessage(stat);
      Util.printConsole(message);
    });
  }

  #getStatisticsMessage(stat) {
    const prize = Util.numberWithCommas(stat.prize);
    return `${stat.numberOfMatches}개 일치${stat.allowBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${stat.count}개`;
  }

  #respondRateOfReturn() {
    const rateOfReturnMessage = `총 수익률은 ${this.#statistics.rateOfReturn}%입니다.`;
    Util.printConsole(rateOfReturnMessage);
  }
}

export default App;
