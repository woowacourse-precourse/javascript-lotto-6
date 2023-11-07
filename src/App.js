import Store from './domain/Store.js';
import Customer from './domain/Customer.js';

class App {
  async play() {
    const customer = new Customer();
    const store = new Store();

    customer.buyLottoIn({ store });
  }
}

export default App;
