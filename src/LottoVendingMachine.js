import createLottoNumber from './utils/random';
import InputView from './View/InputView';
import Lotto from './Lotto';

class LottoVendingMachine {
  #winningNumbers;

  constructor() {
    this.#winningNumbers = [];
  }

  static async buyLottoTickets(buyingPrice) {
    const mount = buyingPrice / 1000;
    const lottoNumber = createLottoNumber();
    return Array.from({ length: mount }, () => new Lotto(lottoNumber));
  }
}

export default LottoVendingMachine;
