import { Random } from '@woowacourse/mission-utils';
import Lotto from '../../Lotto';

class Lottery {
  ticketCount;
  constructor(ticketCount) {
    this.ticketCount = ticketCount;
  }

  static createLottoNumbers() {
    let lottoNumbers = [];
    let sortedNumbers = [];
    lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    sortedNumbers = [...lottoNumbers].sort((a, b) => a - b);

    return sortedNumbers;
  }

  static getLottoTickets(ticketCount) {
    const lottoTickets = [];
    let currentCount = 0;
    while (currentCount < ticketCount) {
      const lottoNumbers = this.createLottoNumbers();
      lottoTickets.push(lottoNumbers);
      currentCount += 1;
    }

    return lottoTickets;
  }
}

export default Lottery;
