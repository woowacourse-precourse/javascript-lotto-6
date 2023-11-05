import { ERROR } from './constant/index.js';
import createLottoNumber from './utils/random.js';
import Lotto from './Lotto.js';

class LottoVendingMachine {
  static buyLottoTickets(buyingPrice) {
    LottoVendingMachine.#validate(buyingPrice);

    const mount = Number(buyingPrice) / 1000;
    return Array.from({ length: mount }, () => new Lotto(createLottoNumber()));
  }

  static #validate(buyingPrice) {
    if (!/^[1-9][0-9]*$/.test(buyingPrice)) {
      throw new Error(ERROR.BUYING_PRICE.GREATER_THAN_ZERO);
    }

    if (Number(buyingPrice) % 1000 !== 0) {
      throw new Error(ERROR.BUYING_PRICE.UNIT);
    }
  }
}

export default LottoVendingMachine;
