import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO } from '../util/constant/index.js';
// Lotto에 Array넣기
// Lotto 클래스로 n개의 티켓 생성하기

class LottoGenerator {
  constructor(ticketCount) {
    this.ticketCount = ticketCount;
    this.lottoTickets = this.generateLottoTickets();
  }

  generateLottoTickets() {
    const tickets = [];
    for (let i = 0; i < this.ticketCount; i++) {
      const lottoTicket = new Lotto(
        Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH)
      );
      tickets.push(lottoTicket.sortLottoNumbers());
    }
    return tickets;
  }

  getLottoTickets() {
    return this.lottoTickets;
  }
}

export default LottoGenerator;
