import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import PurchasedLotto from '../model/PurchasedLotto.js';

export default class PurchaseController {
  outputView = new OutputView();
  #purchasedLottos = [];
  #quantity = 0;

  purchaseLottos(quantity) {
    this.#quantity = quantity;
    for (let i = 0; i < quantity; i++) {
      this.#purchasedLottos.push(
        new PurchasedLotto(this.purchaseSingleLotto())
      );
    }
    this.printPurchasedLottos();
  }

  purchaseSingleLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lotto.sort(function (a, b) {
      return a - b;
    });
  }

  printPurchasedLottos() {
    this.outputView.printPurchasedQuantity(this.#quantity);
    this.#purchasedLottos.forEach((lotto) => {
      this.outputView.printMessage(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  getPurchasedLottos() {
    return this.#purchasedLottos;
  }
}
