import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Domain/Lotto.js';
import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';
import Validator from '../utils/Validator.js';

class LottoService {
  sellLotto(purchaseAmount) {
    this.#validatePurchaseAmount(purchaseAmount);

    const quantity = Math.floor(purchaseAmount / Lotto.price);

    return Array.from({ length: quantity }, () => this.#generateLotto());
  }

  #generateLotto() {
    return new Lotto(this.#generateLottoNumbers());
  }

  #generateLottoNumbers() {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < Lotto.length) {
      lottoNumbers.add(this.#generateLottoNumber());
    }

    return [...lottoNumbers];
  }

  #generateLottoNumber() {
    return Random.pickNumberInRange(Lotto.minNumber, Lotto.maxNumber);
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (
      !Validator.isPositiveInteger(purchaseAmount) ||
      purchaseAmount % Lotto.price !== 0
    ) {
      throw CustomError.lotto(ERROR.message.lotto.invalidUnit);
    }
  }
}

export default LottoService;
