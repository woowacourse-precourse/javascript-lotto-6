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
    return new Lotto(Lotto.generateLottoNumbers());
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
