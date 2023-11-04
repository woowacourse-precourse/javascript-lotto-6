import Inputs from './Inputs.js';

class App {
  #inputs;

  #purchaseAmount;

  #winningNumbers;

  constructor() {
    this.#inputs = new Inputs();
    this.#purchaseAmount = 0;
  }

  async play() {
    this.#purchaseAmount = await this.#inputs.returnPurchaseAmount();
    this.#winningNumbers = await this.#inputs.returnWinningNumbers();
  }
}

export default App;
