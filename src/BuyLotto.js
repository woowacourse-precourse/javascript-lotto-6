import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import error from './constants/error.js';
import strings from './constants/strings.js';

class BuyLotto {
  expense = 0;

  count = 0;

  lottoArray = [];

  buyLottoCount(expense) {
    this.expense = Number(expense);
    BuyLotto.validationExpense(this.expense);

    const lottoCount = this.expense / strings.LOTTO_PRICE;

    return lottoCount;
  }

  static validationExpense(expense) {
    if (strings.EXCLUDING_NUMBERS_REGEX.test(expense)) {
      throw new Error(error.EXPENSE_INTEGER);
    }

    if (expense < strings.LOTTO_PRICE) {
      throw new Error(error.EXPENSE_MORE_THEN_ONE_THOUSAND_WON);
    }

    if (expense % strings.LOTTO_PRICE !== strings.REMAIN) {
      throw new Error(error.EXPENSE_UNIT_ONE_THOUSAND_WON);
    }
  }

  randomNumber(lotteryTicketCount) {
    while (this.count < lotteryTicketCount) {
      const randomPick = Random.pickUniqueNumbersInRange(
        strings.START_NUMBER,
        strings.END_NUMBER,
        strings.SLICE_NUMBER,
      );

      const lotto = new Lotto(randomPick);
      this.lottoArray.push(lotto.getNumber());

      this.count += 1;
    }
    return this.lottoArray;
  }
}
export default BuyLotto;
