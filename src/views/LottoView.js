import MESSAGE from '../constants/message.js';
import inputView from './inputView.js';
import outputView from './outputView.js';

class LottoView {
  #inputView;

  #outputView;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async readPurchaseAmount() {
    const result = await this.#inputView.read(MESSAGE.read.readPurchaseAmount);
    return Number(result);
  }

  print(query) {
    this.#outputView.print(query);
  }

  printLottoCounts(lottoCounts) {
    this.#outputView.print(`\n${lottoCounts}${MESSAGE.print.printLottoCounts}`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(lotto);
    });
  }
}

export default LottoView;
