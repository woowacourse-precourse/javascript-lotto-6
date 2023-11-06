import InputView from './InputView.js';
import Inputs from './Inputs.js';

class App {
  #inputs;

  #purchaseAmount;

  #numLottoTickets;

  constructor() {
    this.#inputs = new Inputs();
    this.inputView = new InputView();
    this.#purchaseAmount = 0;
    this.#numLottoTickets = 0;
  }

  async play() {
    this.#purchaseAmount = await this.#inputs.returnPurchaseAmount();
    this.#numLottoTickets = this.getNumberOfLottoTickets(this.#purchaseAmount);
    this.inputView.printNumLottoTickets(this.#numLottoTickets);
    // this.#winningNumbers = await this.#inputs.returnWinningNumbers();
  }

  getNumberOfLottoTickets(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }
}

export default App;
