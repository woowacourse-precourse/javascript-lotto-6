import Customer from '../Customer';
import Seller from '../Seller';

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
