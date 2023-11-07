import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import PurchasedLotto from '../model/PurchasedLotto.js';

export default class PurchaseController {
  lottos = [];
  quantity = 0;
  outputView = new OutputView();

  issueLottos(quantity) {
    this.quantity = quantity;
    for (let i = 0; i < quantity; i++) {
      this.lottos.push(new PurchasedLotto(this.issueOneLotto()));
    }
    this.printPurchasedLottos();
  }

  issueOneLotto() {
    let lotto = [];
    lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return lotto;
  }

  printPurchasedLottos() {
    this.outputView.printPurchased(this.quantity);
    this.lottos.forEach((lotto) => {
      this.outputView.printMessage(`[${lotto.getNumbers()}]`);
    });
  }
}
