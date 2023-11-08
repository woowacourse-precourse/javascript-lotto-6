import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from './Constants';
//import validateAmount from './validation';

class Purchase {
  async getPurchaseAmount() {
    while (true) {
      const purchaseAmount = await Console.readLineAsync(
        GAME_MESSAGE.PURCHASE_AMOUNT,
      );
    }
  }
}

export default Purchase;
