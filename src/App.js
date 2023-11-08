import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";

class App {
  async play() {
    const lottoPrice = await InputView.getLottoPrice();
    const customer = new Customer(lottoPrice);
    OutputView.printLottoCount(customer.getLottoCount());
  }
}

export default App;