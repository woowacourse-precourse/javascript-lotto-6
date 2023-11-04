import Validate from './Validate';
import Lotto from './Lotto';
import pickUniqueRandomNumbers from './utils/pickUniqueRandomNumbers';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from './constants/errorMessage';
import LOTTO_NUMBER from './constants/lottoNumber';

class User {
  #purchaseAmount;

  #lottos;

  constructor(purchaseAmount) {
    User.#validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getpurchaseAmount() {
    return this.#purchaseAmount;
  }

  getLottos() {
    return this.#lottos;
  }

  purchaseLottos() {
    const lottoPurchaseNumber = this.#purchaseAmount / 1000;
    this.#lottos = User.#purchaseNLottos(lottoPurchaseNumber);
  }

  static #purchaseLotto() {
    const lottoNumbers = pickUniqueRandomNumbers(
      LOTTO_NUMBER.min,
      LOTTO_NUMBER.max,
      LOTTO_NUMBER.count,
    );
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }

  static #purchaseNLottos(purchaseAmount, lottos = []) {
    if (purchaseAmount > 0) {
      const newLotto = User.#purchaseLotto();
      return User.#purchaseNLottos(purchaseAmount - 1, [...lottos, newLotto]);
    }

    return lottos;
  }

  static #validatePurchaseAmount(purchaseAmount) {
    Validate.isInteger([purchaseAmount], PURCHASE_AMOUNT_ERROR_MESSAGE.integer);
    Validate.isMultipleThousand(
      [purchaseAmount],
      PURCHASE_AMOUNT_ERROR_MESSAGE.multipleThousand,
    );
  }
}

export default User;
