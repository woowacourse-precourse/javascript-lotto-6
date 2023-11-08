import Validation from '../Validation';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from '../constants/errorMessage';

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

  static #validatePurchaseAmount(purchaseAmount) {
    const { integer, multipleThousand } = PURCHASE_AMOUNT_ERROR_MESSAGE;
    new Validation([purchaseAmount]).isInteger(integer).isMultipleThousand(multipleThousand);
  }
}

export default User;
