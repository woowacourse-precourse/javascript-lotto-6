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
    Validations.isPlus(lottoPrice);
  }
}

export default Customer;
