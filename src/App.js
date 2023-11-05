import { InputMessage } from './models/const.js';
import Util from './utils/util.js';
import Purchase from './Purchase.js';

class App {
  #purchase;

  async play() {
    await this.#requestPurchase();
  }

  async #requestPurchase() {
    try {
      const value = await Util.readLineAsyncConsole(`${InputMessage.Purchase}\n`);
      this.#purchase = new Purchase(value);
    } catch (e) {
      Util.printConsole(`\n${e.message}`);
      await this.#requestPurchase();
    }
  }
}

export default App;
