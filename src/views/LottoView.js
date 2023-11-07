import MESSAGE from '../constants/message.js';
import OPTION from '../constants/option.js';
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

  async readWinningNumbers() {
    const result = await this.#inputView.read(MESSAGE.read.readWinningNumbers);
    return result.split(OPTION.inputSeparator).map(Number);
  }

  print(query) {
    this.#outputView.print(query);
  }

  printNewLine() {
    this.print('');
  }

  printLottoCounts(lottoCounts) {
    this.print(`${lottoCounts}${MESSAGE.print.printLottoCounts}`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      this.print(lotto);
    });
  }
}

export default LottoView;
