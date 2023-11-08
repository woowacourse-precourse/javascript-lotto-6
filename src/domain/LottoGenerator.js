import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_CONSTANTS } from '../util/constant/index.js';

class LottoGenerator {
  constructor(ticketCount) {
    this.ticketCount = ticketCount;
    this.lottoTickets = this.generateLottoTickets();
  }

  generateLottoTickets() {
    const tickets = Array.from({ length: this.ticketCount }, () =>
      new Lotto(this.pickRandomLottoNumbers())
        .sortLottoNumbers()
        .getLottoTicket(),
    );
    return tickets;
  }

  pickRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.MIN,
      LOTTO_CONSTANTS.MAX,
      LOTTO_CONSTANTS.LENGTH,
    );
  }

  getLottoTickets() {
    console.log(this.lottoTickets);
    return this.lottoTickets;
  }
}

export default LottoGenerator;
