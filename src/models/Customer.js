import Validations from '../Validations.js';
import Conditions from '../constants/Conditions.js';

class Customer {
  /** @type {number} */
  #lottoPrice;

  /** @type {number} */
  #lottoCount;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = Number(lottoPrice);
    this.#lottoCount = this.#lottoPrice / Conditions.ONE_LOTTO_PRICE;
  }

  #validateLottoPrice(lottoPrice) {
    Validations.hasSpace(lottoPrice);
    Validations.isNumber(lottoPrice);
    Validations.isPlus(lottoPrice);
    Validations.isThousandUnit(lottoPrice);
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default Customer;
