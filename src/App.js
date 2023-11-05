import View from './View/View.js';
import Validator from './utils/Validator.js';
import MessageFormat from './utils/messageFormat.js';
import OutputView from './View/OutputView.js';
import PURCHASE_PRICE from './constants/purchasePrice.js';
import Lotto from './Lotto.js';

class App {
  #view = new View();

  #outputView = OutputView;

  async play() {
    await this.setGameConfig();
  }

  async setGameConfig() {
    const purchasePrice = await this.readGameConfig();
  }

  async readGameConfig() {
    const purchaseCount = await this.getPurchaseCount();
  }

  async getPurchaseCount() {
    while (true) {
      try {
        const purchasePrice = await this.#view.readPurchasePrice();
        Validator.validatePurchasePrice(purchasePrice);
        const purchaseCount = purchasePrice / PURCHASE_PRICE.divisionUnit;
        return purchaseCount;
      } catch (e) {
        this.#outputView.print(MessageFormat.error(e.message));
      }
    }
  }
}

export default App;
