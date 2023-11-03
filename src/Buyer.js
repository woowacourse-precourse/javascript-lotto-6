import { ERROR, LOTTO } from './constant.js';
import Output from './Output.js';
import Util from './Util.js';

class Buyer {
  #budget;

  #lottoList;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
    this.#lottoList = [];
  }

  #validate(budget) {
    if (budget % 1000 !== 0) {
      throw new Error(ERROR.budget);
    }
  }

  getPurchaseCount() {
    return this.#budget / LOTTO.price;
  }

  setLottos() {
    for (let i = 0; i < this.getPurchaseCount(); i += 1) {
      this.#lottoList.push(Util.createLottoNumber());
    }

    Output.printPurchasedLottoList(this.#lottoList);
  }
}

export default Buyer;
