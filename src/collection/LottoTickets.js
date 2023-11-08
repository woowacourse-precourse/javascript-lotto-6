import Lotto from '../Lotto.js';
import GameUtils from '../utils/GameUtils.js';

class LottoTickets {
  #lottoTickets;

  constructor(lottoTicketCount) {
    const lottoTickets = [];

    Array.from({ length: lottoTicketCount }).forEach(() => {
      const lottoNumber = LottoTickets.#getLottoNumber();
      const lottoTicket = new Lotto(lottoNumber);

      lottoTickets.push(lottoTicket);
    });

    this.#lottoTickets = lottoTickets;
  }

  static #getLottoNumber() {
    const randomSixNumber =
      GameUtils.createRandomUniqueSixNumberFromOneToForthFive();
    GameUtils.sortRandomNumberInAscendingOrder(randomSixNumber);

    return randomSixNumber;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }
}

export default LottoTickets;
