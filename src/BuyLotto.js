import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import strings from './constants/strings.js';
import validator from './Validator.js';

class BuyLotto {
  expense = 0;

  count = 0;

  lottoArray = [];

  buyLottoCount(expense) {
    this.expense = Number(expense);
    validator.validationExpense(expense);
    const lottoCount = this.expense / strings.LOTTO_PRICE;

    return lottoCount;
  }

  randomNumber(lotteryTicketCount) {
    while (this.count < lotteryTicketCount) {
      const randomPick = Random.pickUniqueNumbersInRange(
        strings.START_NUMBER,
        strings.END_NUMBER,
        strings.LOTTO_COUNT,
      );

      const lotto = new Lotto(randomPick);
      this.lottoArray.push(lotto.getNumber());

      this.count += 1;
    }
    return this.lottoArray;
  }
}
export default BuyLotto;
