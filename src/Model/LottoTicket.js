import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';

class LottoTicket {
  static generateLottotickets(purchaseAmount) {
    const LOTTO_TICKETS = [];
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      LOTTO_TICKETS.push(new Lotto(LOTTO_NUMBERS));
    }
    return LOTTO_TICKETS;
  }
}

export default LottoTicket;
