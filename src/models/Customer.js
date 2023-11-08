import Validations from '../constants/Validations.js';

class Customer {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  #validateLottoPrice(lottoPrice) {
    Validations.hasSpace(lottoPrice);
  }
}

export default Customer;
