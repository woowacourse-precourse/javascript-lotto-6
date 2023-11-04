import InputView from './InputView.js';
import Purchase from './Purchase.js';
import OutputView from './OutputView.js';

class Game {
  #quantity;

  constructor() {
    this.#quantity;
  }

  purchase() {
    InputView.purchaseLotto(this.handlePurchase);
  }

  handlePurchase = (amount) => {
    this.#quantity = new Purchase(amount).getAmount();
    OutputView.printQuantity(this.#quantity);
  };
}

export default Game;
