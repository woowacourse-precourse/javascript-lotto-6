import InputView from '../views/InputView.js';
import Seller from './Seller.js';

class Customer {
  #seller;

  async payMoney() {
    this.#seller = new Seller();
    const money = await InputView.InputMoney();
    this.#seller.setAmount(money);
  }
}

export default Customer;
