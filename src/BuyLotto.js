import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import error from './constants/error.js';

class BuyLotto {
  expense = 0;

  count = 0;

  lottoArray = [];

  buyLottoCount(expense) {
    this.expense = Number(expense);
    BuyLotto.validationExpense(this.expense);

    const lottoCount = this.expense / 1000;

    return lottoCount;
  }

  static validationExpense(expense) {
    if (/[^0-9]/.test(expense)) {
      throw new Error(error.EXPENSE_INTEGER);
    }

    if (expense < 1000) {
      throw new Error(error.EXPENSE_MORE_THEN_ONE_THOUSAND_WON);
    }

    if (expense % 1000 !== 0) {
      throw new Error(error.EXPENSE_UNIT_ONE_THOUSAND_WON);
    }
  }

  // 로또 개수만큼 랜덤 번호 배열 생성
  randomNumber(lotteryTicketCount) {
    while (this.count < lotteryTicketCount) {
      const randomPick = Random.pickUniqueNumbersInRange(1, 45, 6);

      const lotto = new Lotto(randomPick);
      this.lottoArray.push(lotto.getNumber());

      this.count += 1;
    }
    return this.lottoArray;
  }
}
export default BuyLotto;
