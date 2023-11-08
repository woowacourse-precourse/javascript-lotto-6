import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE, GAME_NUMBER } from './Constants.js';
import Validator from './Validator.js';

class User {
  constructor(userLotto, purchaseAmount) {
    this.userLotto = userLotto;
    this.purchaseAmount = purchaseAmount;
  }

  async inputPurchaseAmount() {
    this.purchaseAmount = await Console.readLineAsync(
      GAME_MESSAGE.purchaseAmount,
    );

    try {
      Validator.purchaseAmount(this.purchaseAmount);
      this.purchaseLottoCount(this.purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return this.inputPurchaseAmount();
    }
  }

  purchaseLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / GAME_NUMBER.purchaseUnit;

    Console.print(`\n${lottoCount}${GAME_MESSAGE.printPurchase}`);

    this.purchaseLottoNumber(lottoCount);
  }

  purchaseLottoNumber(lottoCount) {
    this.userLotto = new Array(lottoCount).fill(0).map(() => {
      const userLottoNumber = Random.pickUniqueNumbersInRange(
        GAME_NUMBER.numberMin,
        GAME_NUMBER.numberMax,
        GAME_NUMBER.numberLength,
      );
      return userLottoNumber.sort((a, b) => a - b);
    });

    this.userLotto.forEach(numbers => {
      Console.print(`[${numbers.join(', ')}]`);
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
