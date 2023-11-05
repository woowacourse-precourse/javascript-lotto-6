import createLottoNumber from './utils/random.js';
import Lotto from './Lotto.js';

class LottoVendingMachine {
  static buyLottoTickets(buyingPrice) {
    const mount = buyingPrice / 1000;
    return Array.from({ length: mount }, () => new Lotto(createLottoNumber()));
  }
}

export default LottoVendingMachine;
