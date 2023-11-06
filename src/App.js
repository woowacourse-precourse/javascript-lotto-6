import InputView from './InputView.js';
import Inputs from './Inputs.js';
import Lotto from './Lotto.js';
import { OUTPUT_MESSAGE } from './constants.js';

class App {
  #inputs;

  #purchaseAmount;

  #numLottoTickets;

  #inputView;

  #winningNumbers;

  #lottoNumbers;

  constructor() {
    this.#inputs = new Inputs();
    this.#inputView = new InputView();
    this.#purchaseAmount = 0;
    this.#numLottoTickets = 0;
  }

  async play() {
    this.#purchaseAmount = await this.#inputs.returnPurchaseAmount();
    this.#numLottoTickets = this.getNumberOfLottoTickets(this.#purchaseAmount);
    this.#inputView.printNumLottoTickets(this.#numLottoTickets);
    this.generateLottoTickets();
    this.#winningNumbers = await this.#inputs.returnWinningNumbers();
    this.#inputView.printMessage(OUTPUT_MESSAGE.statisticsMessage);
  }

  getNumberOfLottoTickets(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  generateLottoTickets() {
    this.#lottoNumbers = Array.from({ length: this.#numLottoTickets }, () => {
      const lotto = new Lotto();
      this.#inputView.printGetNumbers(lotto.getNumbers());
      return lotto.getNumbers();
    });
  }
}

export default App;
