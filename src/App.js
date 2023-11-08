import InputView from "./views/InputView.js";
import Customer from "./models/Customer.js";

class App {
  async play() {
    const lottoPrice = await InputView.getLottoPrice();
    const customer = new Customer(lottoPrice);
  }
}

export default App;