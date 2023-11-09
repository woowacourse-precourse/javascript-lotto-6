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

  /**
   * 구입 금액 유효성 검사
   * @param {String} lottoPrice 
   */
  #validateLottoPrice(lottoPrice) {
    Validations.hasSpace(lottoPrice);
    Validations.isNumber(lottoPrice);
    Validations.isPlus(lottoPrice);
    Validations.isThousandUnit(lottoPrice);
  }

  /**
   * 구매자 로또 번호 유효성 검사
   * @param {Array} lottoNumbers 
   */
  #validateLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach((lottoNumber) => {
      lottoNumber.forEach((number) => {
      Validations.isNumber(number);
      Validations.isInRange(number);
      Validations.isInteger(number);
    });
    Validations.isNotDuplicated(lottoNumber);
    Validations.isProperLength(lottoNumber);
    Validations.isSorted(lottoNumber);
    });
  }

  setLottoNumbers(lottoNumbers) {
    this.#validateLottoNumbers(lottoNumbers);
    this.#lottoNumbers = lottoNumbers;
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }
}

export default Customer;
