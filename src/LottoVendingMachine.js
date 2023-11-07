import { ERROR, LOTTO } from './constant/index.js';
import createLottoNumber from './utils/random.js';
import Lotto from './Lotto.js';

class LottoVendingMachine {
  static buyLottoTickets(buyingPrice) {
    const mount = Number(buyingPrice) / LOTTO.PRICE;
    return Array.from({ length: mount }, () => new Lotto(createLottoNumber()));
  }
}

export default LottoVendingMachine;
