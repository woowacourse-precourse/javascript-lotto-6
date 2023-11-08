import CONSTANTS from '../../Lib/constans.js';
import { Random } from '@woowacourse/mission-utils';

class LottoGenerator {
  /**
   * 랜덤한 로또 티켓 번호를 생성하고 반환한다.
   *
   * @returns {Array} 랜덤한 로또 티켓 번호
   */
  generateRandomLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      CONSTANTS.number.min,
      CONSTANTS.number.max,
      CONSTANTS.number.limit,
    ).sort((a, b) => a - b);
  }

  /**
   * 지정된 수만큼 랜덤한 로또 티켓들을 생성하고 반환한다.
   *
   * @param {number} ticketCount 생성할 로또 티켓의 수
   * @returns {Array} 생성된 로또 티켓들
   */
  generateLottoTickets(ticketCount) {
    return Array.from({ length: ticketCount }, () => this.generateRandomLottoTicket());
  }
}

export default LottoGenerator;
