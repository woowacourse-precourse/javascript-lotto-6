import LottoGenerator from '../LottoGenerator.js';
import Lotto from '../Lotto.js';
import { condition } from '../consts.js';

class LottoGameService {
  publishLotto() {
    const newLotto = new LottoGenerator().generateLotto();
    return new Lotto(newLotto).sortAscending();
  }

  getPurchaseCount(purchaseAmount) {
    const count = purchaseAmount / condition.oneLottoPrice;
    return count;
  }

  getPublishedLottos(purchaseCount) {
    let publishedLottos = [];
    let count = purchaseCount;
    while (count !== 0) {
      const newLotto = new Lotto(this.publishLotto()).sortAscending();
      publishedLottos = [...publishedLottos, newLotto];
      count -= 1;
    }
    return publishedLottos;
  }
}

export default LottoGameService;
