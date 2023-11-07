import { Console } from '@woowacourse/mission-utils';
import Purchase from './Purchase.js';

class PurchaseUI {
  async output() {
    while (true) {
      try {
        const AMOUNT = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        const PURCHASED_LOTTO = new Purchase(AMOUNT);
        const PURCHASED_LOTTO_LIST = PURCHASED_LOTTO.list();
        PURCHASED_LOTTO.ui();

        return { AMOUNT, PURCHASED_LOTTO_LIST };
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default PurchaseUI;
