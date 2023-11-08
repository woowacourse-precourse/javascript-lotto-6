import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import PurchasedLotto from '../model/PurchasedLotto.js';

export default class PurchaseController {
  #purchasedLottos = [];
  #quantity = 0;
  outputView = new OutputView();

  issueLottos(quantity) {
    this.#quantity = quantity;
    for (let i = 0; i < quantity; i++) {
      this.#purchasedLottos.push(new PurchasedLotto(this.issueOneLotto()));
    }
    this.printPurchasedLottos();
  }

  issueOneLotto() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lotto.sort(function (a, b) {
      return a - b;
    });
  }

  printPurchasedLottos() {
    this.outputView.printPurchased(this.#quantity);
    this.#purchasedLottos.forEach((lotto) => {
      this.outputView.printMessage(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  getPurchasedLottos() {
    return this.#purchasedLottos;
  }
}
