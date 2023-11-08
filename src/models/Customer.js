import InputView from '../views/InputView.js';

class Customer {
  async payMoney() {
    const money = await InputView.InputMoney();
    return money;
  }
}

export default Customer;
