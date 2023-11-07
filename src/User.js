import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class User {
  constructor(userLotto) {
    this.userLotto = userLotto;
    this.purchaseAmount = 0;
  }

  async inputPurchaseAmount() {
    this.purchaseAmount = await Console.readLineAsync(
      GAME_MESSAGE.purchaseAmount,
    );

    this.purchaseLottoCount(this.purchaseAmount);
  }

  purchaseLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;

    Console.print(`\n${lottoCount}${GAME_MESSAGE.printPurchase}`);

    this.purchaseLottoNumber(lottoCount);
  }

  purchaseLottoNumber(lottoCount) {
    this.userLotto = new Array(lottoCount).fill(0).map(() => {
      const userLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      return userLottoNumber.sort((a, b) => a - b);
    });

    this.userLotto.forEach(numbers => {
      Console.print(numbers);
    });
  }

  getPurchaseAmount() {
    return this.purchaseAmount;
  }

  getUserLotto() {
    return this.userLotto;
  }
}

export default User;
