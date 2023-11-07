import InputView from './View/InputView.js';
import Inputs from './Inputs.js';
import Lotto from './Lotto.js';
import { OUTPUT_MESSAGE } from './constants.js';
import OutputView from './View/OutputView.js';

class App {
  #purchaseAmount;

  #numLottoTickets;

  #winningNumbers;

  #lottoNumbers;

  constructor() {
    this.inputs = new Inputs();
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.#purchaseAmount = 0;
    this.#numLottoTickets = 0;
  }

  async play() {
    this.#purchaseAmount = await this.inputs.returnPurchaseAmount();
    this.#numLottoTickets = this.getNumberOfLottoTickets(this.#purchaseAmount);
    this.outputView.printNumLottoTickets(this.#numLottoTickets);
    this.generateLottoTickets();
    this.#winningNumbers = await this.inputs.returnWinningNumbers();
    this.outputView.printMessage(OUTPUT_MESSAGE.statisticsMessage);
  }

  getNumberOfLottoTickets(purchaseAmount) {
    return Math.floor(purchaseAmount / 1000);
  }

  generateLottoTickets() {
    this.#lottoNumbers = Array.from({ length: this.#numLottoTickets }, () => {
      const lotto = new Lotto();
      this.outputView.printGetNumbers(lotto.getNumbers());
      return lotto.getNumbers();
    });
  }
}

export default App;
