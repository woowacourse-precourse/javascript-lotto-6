import LottoGenerator from '../LottoGenerator.js';
import { condition } from '../consts.js';

class LottoGameService {
  getPurchaseCount(purchaseAmount) {
    const count = purchaseAmount / condition.oneLottoPrice;
    return count;
  }
}

export default LottoGameService;
