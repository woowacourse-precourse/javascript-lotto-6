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

  async print(query) {
    this.#outputView.print(query);
  }
}

export default LottoView;
