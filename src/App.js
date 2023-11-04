import View from './View/View.js';
import Validator from './utils/Validator.js';
import MessageFormat from './utils/messageFormat.js';
import OutputView from './View/OutputView.js';

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
    const purchasePrice = await this.getPurchasePrice();
  }

  async getPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await this.#view.readPurchasePrice();
        Validator.validatePurchasePrice(purchasePrice);
        return purchasePrice;
      } catch (e) {
        this.#outputView.print(MessageFormat.error(e.message));
      }
    }
  }
}

export default App;
