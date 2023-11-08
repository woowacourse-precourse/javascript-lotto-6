import Validations from '../Validations.js';
import Conditions from '../constants/Conditions.js';

class Customer {
  /** @type {number} */
  #lottoPrice;

  /** @type {number} */
  #lottoCount;

  /** @type {Array} */
  #lottoNumbers;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = Number(lottoPrice);
    this.#lottoCount = this.#lottoPrice / Conditions.ONE_LOTTO_PRICE;
    this.#lottoNumbers = [];
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

  setLottoNumbers(lottoNumbers) {
    this.#lottoNumbers = lottoNumbers;
  }
}

export default Customer;
