import InputReader from './view/InputReader.js';
import { validateUserInput } from './utils/ValidateUserInput.js';

class App {
  #inputReader;

  constructor() {
    this.#inputReader = new InputReader();
  }
  async play() {
    const purchasePrice = await this.requestPurchasePrice();
  }

  async requestPurchasePrice() {
    const purchasePrice = await this.#inputReader.purchasePrice();
    validateUserInput.purchasePrice(purchasePrice);

    return purchasePrice;
  }
}

export default App;
