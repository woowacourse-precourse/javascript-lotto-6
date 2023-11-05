import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class User {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      GAME_MESSAGE.purchaseAmount,
    );

    this.purchaseLottoCount(purchaseAmount);
  }

  purchaseLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;

    Console.print(`\n${lottoCount}${GAME_MESSAGE.printPurchase}`);

    this.purchaseLottoNumber(lottoCount);
  }

  purchaseLottoNumber(lottoCount) {
    const userLotto = new Array(lottoCount);

    [...userLotto].forEach(() => {
      const userLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(userLottoNumber.sort((a, b) => a - b));
    });
  }
}

export default User;
