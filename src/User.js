import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class User {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      GAME_MESSAGE.purchaseAmount,
    );
  }
}

export default User;
