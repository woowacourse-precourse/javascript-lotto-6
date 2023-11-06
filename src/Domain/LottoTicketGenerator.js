import LOTTO from '../constants/lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoTicketGenerator {
  /**
   * 랜덤한 로또 티켓 번호를 생성하고 반환합니다.
   * @returns {Array} 랜덤한 로또 티켓 번호
   */
  static generateRandomLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.number.min,
      LOTTO.number.max,
      LOTTO.number.limit,
    ).sort((a, b) => a - b);
  }

  /**
   * 지정된 수만큼 랜덤한 로또 티켓들을 생성하고 반환합니다.
   * @param {number} ticketCount 생성할 로또 티켓의 수
   * @returns {Array} 생성된 로또 티켓들
   */
  static generateLottoTickets(ticketCount) {
    return Array.from({ length: ticketCount }, () => this.generateRandomLottoTicket());
  }
}

export default LottoTicketGenerator;
