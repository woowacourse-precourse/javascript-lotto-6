import Customer from '../models/Customer.js';
import Seller from '../models/Seller.js';

class LottoFlow {
  #customer;

  #seller;

  constructor() {
    this.#customer = new Customer();
    this.#seller = new Seller();
  }

  startLotto() {
    this.#customer.payMoney();
  }
}

export default LottoFlow;
