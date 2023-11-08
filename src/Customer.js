import InputView from './views/InputView';
import Seller from './Seller';

class Customer {
  #seller;

  payMoney() {
    this.#seller = new Seller();
    this.#seller.getAmount(InputView.InputMoney());
  }
}

export default Customer;
