import { ERROR, LOTTO } from './constant.js';
import Lotto from './Lotto.js';
import Output from './Output.js';
import Util from './Util.js';

class Buyer {
  #budget;

  #lottoList;

  constructor(budget) {
    this.#validate(budget);
    this.#budget = budget;
    this.#lottoList = [];
    this.setLottoList();
  }

  #validate(budget) {
    if (budget % 1000 !== 0) {
      throw new Error(ERROR.budget);
    }
  }

  getPurchaseCount() {
    return this.#budget / LOTTO.price;
  }

  setLottoList() {
    for (let i = 0; i < this.getPurchaseCount(); i += 1) {
      const lotto = new Lotto(Util.createLottoNumber());
      this.#lottoList.push(lotto.getLotto());
    }

    
  }

  getLottoList() {
    return this.#lottoList;
  }
}

export default Buyer;
