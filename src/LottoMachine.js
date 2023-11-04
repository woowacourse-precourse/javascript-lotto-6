import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';

class LottoMachine {
  #numberOfLottos;

  constructor(money) {
    this.#validateMoney(money);
    this.#numberOfLottos = money / LOTTO.price;
  }

  #validateMoney(money) {
    if (money % LOTTO.price) {
      throw new Error(ERROR.lotto.notDivisibleMoney);
    }
  }
}

export default LottoMachine;
