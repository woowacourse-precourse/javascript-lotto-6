import PurchaseAmount from '../PurchaseAmount.js';
import LottoGenerator from './LottoGenerator.js';

class LottoModel {
  #userLottos;

  generateLotto(purchaseAmount) {
    const count = PurchaseAmount.of(purchaseAmount).getLottoCount();
    const lottos = LottoGenerator.run(count);
    this.#userLottos = lottos;

    return lottos;
  }
}

export default LottoModel;
