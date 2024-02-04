import { Random } from '@woowacourse/mission-utils';

class LottoTicketGenerator {
  makeLotto() {
    const pickLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    return pickLottoNumber;
  }
}

export default LottoTicketGenerator;
