import createLottoNumber from './utils/random';
import Lotto from './Lotto';

class LottoVendingMachine {
  static buyLottoTickets(buyingPrice) {
    const mount = buyingPrice / 1000;
    const lottoNumber = createLottoNumber();
    return Array.from({ length: mount }, () => new Lotto(lottoNumber));
  }
}

export default LottoVendingMachine;
