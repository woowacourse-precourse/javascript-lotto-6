import Customer from '../models/Customer';
import Seller from '../models/Seller';

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
