import { LOTTO } from './constant/index.js';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoShop {
  static #LOTTO_TICKET_PRICE = 1000;

  static issueLottoTickets(buyingPrice) {
    const mount = buyingPrice / LottoShop.#LOTTO_TICKET_PRICE;
    return Array.from({ length: mount }, LottoShop.#issueLottoTicket);
  }

  static #issueLottoTicket() {
    return new Lotto(LottoShop.#createLottoNumbers());
  }

  static #createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_LENGTH
    );
  }
}

export default LottoShop;
