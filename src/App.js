import { RequestMessage, ResponseMessage } from './models/message.js';
import { LottoRule } from './models/rule.js';
import Util from './_shared/util.js';
import Purchase from './Purchase.js';
import Purchaser from './Purchaser.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';

class App {
  #purchase;
  #purchaser;
  #lotto;
  #bonus;

  async play() {
    await this.#requestPurchase();
    this.#respondPurchaseResult();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumber();
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
      const numbers = value.split(',').map(v => Number(v.trim()));

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
}

export default App;
