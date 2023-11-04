import Inputs from './Inputs.js';

class App {
  #inputs;

  #purchaseAmount;

  constructor() {
    this.#inputs = new Inputs();
    this.#purchaseAmount = 0;
  }

  async play() {
    this.#purchaseAmount = await this.#inputs.returnPurchaseAmount();
  }
}

export default App;
