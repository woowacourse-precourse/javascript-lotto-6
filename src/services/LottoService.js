import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Domain/Lotto.js';
import WinningLotto from '../Domain/WinningLotto.js';
import LOTTO from '../constants/lotto.js';
import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';
import Validator from '../utils/Validator.js';

class LottoService {
  sellLotto(purchaseAmount) {
    this.#validatePurchaseAmount(purchaseAmount);

    const quantity = Math.floor(purchaseAmount / LOTTO.price);

    return Array.from({ length: quantity }, () => this.#generateLotto());
  }

  generateWinningLotto({ numbers, bonusNumber }) {
    return new WinningLotto({ numbers, bonusNumber });
  }

  #generateLotto() {
    const lottoNumber = this.#generateLottoNumber();

    return new Lotto(lottoNumber);
  }

  #generateLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.length,
    );
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (
      !Validator.isPositiveInteger(purchaseAmount) ||
      purchaseAmount % LOTTO.price !== 0
    ) {
      throw CustomError.lotto(ERROR.message.lotto.invalidUnit);
    }
  }
}

export default LottoService;
