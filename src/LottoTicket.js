import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export default class LottoTickets {
  static getLottoTickets(purchaseAmount) {
    const numberOfLottoTickets = Math.floor(purchaseAmount / 1000);
    Console.print(`${numberOfLottoTickets}개를 구매했습니다.`);

    const lottoTickets = this.generateLottoTickets(numberOfLottoTickets);
    lottoTickets.forEach((ticket, index) => {
      Console.print('[' + ticket.getNumbers().sort((a, b) => a - b).join(', ') + ']');
    });

    return lottoTickets;
  }

  static generateLottoTickets(count) {
    const lottoTickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoTicket = new Lotto(numbers);
      lottoTickets.push(lottoTicket);
    }
    return lottoTickets;
  }
}

