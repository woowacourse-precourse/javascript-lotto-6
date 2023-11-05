import { ERROR, LOTTO_PRICE } from './constant/index.js';
import createLottoNumber from './utils/random.js';
import Lotto from './Lotto.js';

class LottoVendingMachine {
  static buyLottoTickets(buyingPrice) {
    LottoVendingMachine.#validate(buyingPrice);

    const mount = Number(buyingPrice) / LOTTO_PRICE;
    return Array.from({ length: mount }, () => new Lotto(createLottoNumber()));
  }

  static #validate(buyingPrice) {
    if (!/^[1-9]\d*$/.test(buyingPrice)) {
      throw new Error(ERROR.BUYING_PRICE.POSITIVE_INTEGER);
    }

    if (Number(buyingPrice) % LOTTO_PRICE !== 0) {
      throw new Error(ERROR.BUYING_PRICE.UNIT);
    }
  }
}

export default LottoVendingMachine;
