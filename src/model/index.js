import PurchaseAmount from '../PurchaseAmount.js';
import LottoNumberGenerator from './LottoNumberGenerator.js';

class LottoModel {
  #userLottos;

  generateLotto(input) {
    const lottoCount = PurchaseAmount.of(input).getLottoCount();
    const lottos = LottoNumberGenerator.run(lottoCount);
    this.#userLottos = lottos;

    return lottos;
  }
}

export default LottoModel;
