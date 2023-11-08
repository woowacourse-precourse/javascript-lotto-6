import Validations from '../Validations.js';

class Customer {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  #validateLottoPrice(lottoPrice) {
    Validations.hasSpace(lottoPrice);
    Validations.isNumber(lottoPrice);
  }
}

export default Customer;
