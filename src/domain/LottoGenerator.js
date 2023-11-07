import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
// Lotto에 Array넣기
// Lotto 클래스로 n개의 티켓 생성하기

class LottoGenerator {
  constructor(lottoCount) {
    this.lottoCount = lottoCount;
    this.lottoTickets = this.generateLottoTickets();
  }

  generateLottoTickets() {
    const tickets = [];
    for (let i = 0; i < this.lottoCount; i++) {
      const lottoTicket = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      tickets.push(lottoTicket.sortLottoNumbers());
    }
    return tickets;
  }

  getLottoTickets() {
    return this.lottoTickets;
  }
}

export default LottoGenerator;
