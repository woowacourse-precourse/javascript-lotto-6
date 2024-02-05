import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoTicketGenerator {
  makeLotto() {
    const pickLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    const lotto = new Lotto(pickLottoNumber);
    console.log("lotto",lotto.getLottoNumber())
    return lotto;
  }
}

export default LottoTicketGenerator;
