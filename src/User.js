import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class User {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      GAME_MESSAGE.purchaseAmount,
    );

    return this.purchaseLottoCount(purchaseAmount);
  }

  purchaseLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;

    Console.print(`\n${lottoCount}${GAME_MESSAGE.printPurchase}`);
  }
}

export default User;
