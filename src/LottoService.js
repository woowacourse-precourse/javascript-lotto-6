import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { ERROR_MESSAGE, LOTTO } from './utils/Define';
import CustomError from './utils/Errors';

class LottoService {
  sellLotto(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    const quantitiy = Math.floor(purchaseAmount / LOTTO.price);
    return Array.from({ length: quantitiy }, () => this.#generateLotto());
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!/^\d000$/.test(String(purchaseAmount))) {
      throw CustomError.userInputError(ERROR_MESSAGE.invalidAmountError);
    }
  }

  #generateLotto() {
    return new Lotto(this.#generateLottoNumbers);
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.numberMim,
      LOTTO.numberMax,
      LOTTO.numberCount,
    );
  }
}

export default LottoService;
