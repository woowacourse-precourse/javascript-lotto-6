import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import strings from './constants/strings.js';

class BuyLotto {
  count = 0;

  randomPick;

  lottoArray = [];

  buyLottoCount(expense) {
    const lottoCount = expense / strings.LOTTO_PRICE;

    return lottoCount;
  }

  issuedLotto(lotteryTicketCount) {
    while (this.count < lotteryTicketCount) {
      this.randomNumber();

      const lotto = new Lotto(this.randomPick);
      this.lottoArray.push(lotto.getNumber());

      this.count += 1;
    }
    return this.lottoArray;
  }

  randomNumber() {
    this.randomPick = Random.pickUniqueNumbersInRange(
      strings.START_NUMBER,
      strings.END_NUMBER,
      strings.LOTTO_COUNT,
    );
    return this.randomPick;
  }
}
export default BuyLotto;
