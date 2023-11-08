import Validation from '../Validation';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from '../constants/errorMessage';
import Lotto from './Lotto';
import LOTTO_NUMBER from '../constants/lottoNumber';
import pickUniqueRandomNumbers from '../utils/pickUniqueRandomNumbers';

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

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  purchaseLottos() {
    const lottoPurchaseNumber = this.#purchaseAmount / 1000;
    const lottos = User.#purchaseNLottos(lottoPurchaseNumber);
    this.#lottos = lottos;

    return this;
  }

  static #purchaseOneLotto() {
    const { min, max, count } = LOTTO_NUMBER;
    const lottoNumbers = pickUniqueRandomNumbers(min, max, count);
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }

  static #purchaseNLottos(purchaseAmount, lottos = []) {
    if (purchaseAmount > 0) {
      const newLotto = User.#purchaseOneLotto();
      return User.#purchaseNLottos(purchaseAmount - 1, [...lottos, newLotto]);
    }

    return lottos;
  }

  static #validatePurchaseAmount(purchaseAmount) {
    const { integer, multipleThousand } = PURCHASE_AMOUNT_ERROR_MESSAGE;
    new Validation([purchaseAmount]).isInteger(integer).isMultipleThousand(multipleThousand);
  }
}

export default User;
