import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoShop {
  static issueLottoTickets(buyingPrice) {
    const mount = buyingPrice / 1000;
    return Array.from({ length: mount }, LottoShop.#issueLottoTicket);
  }

  static #issueLottoTicket() {
    return new Lotto(LottoShop.#createLottoNumbers());
  }

  static #createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoShop;
