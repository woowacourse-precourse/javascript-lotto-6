import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoTicketGenerator {
  makeLotto() {
    const pickLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    console.log("pickLottoNumber",pickLottoNumber)
    const sortedLottoNumber = pickLottoNumber.sort(
        (a, b) => a - b,
      );
    const lotto = new Lotto(sortedLottoNumber);
    console.log("lotto",lotto.getLottoNumber())
    return lotto;
  }
}

export default LottoTicketGenerator;
