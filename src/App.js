import { LottoRule, RequestMessage, ResponseMessage } from './models/const.js';
import Util from './utils/util.js';
import Purchase from './Purchase.js';
import Manager from './Manager.js';
import Lotto from './Lotto.js';

class App {
  #purchase;
  #manager;
  #lotto;

  async play() {
    await this.#requestPurchase();
    this.#respondPurchaseResult();
    await this.#requestWinnerNumbers();
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

    this.#manager = new Manager();
    for (let i = 0; i < numberOfLotto; i += 1) {
      const lotto = this.#manager.generateLotto();
      Util.printConsole(`[${lotto.join(', ')}]`);
    }

    Util.printConsole('');
  }

  async #requestWinnerNumbers() {
    try {
      const value = await Util.readLineAsyncConsole(`${RequestMessage.WinnerNumbers}\n`);
      const numbers = value.split(',').map(v => Number(v.trim()));

      Util.printConsole('');
      this.#lotto = new Lotto(numbers);
    } catch (e) {
      Util.printConsole(`${e.message}`);
      await this.#requestWinnerNumbers();
    }
  }
}

export default App;
