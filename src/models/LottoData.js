import { ERROR_MESSAGE } from '../constants/Message.js';
import { LOTTO } from '../constants/Constant.js';

class LottoData {
  validatePurchaseAmount(amount) {
    if (amount === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }
    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if (amount === '0' || amount % LOTTO.unit !== 0) {
      throw new Error(ERROR_MESSAGE.notDivide);
    }
  }
}

export default LottoData;
