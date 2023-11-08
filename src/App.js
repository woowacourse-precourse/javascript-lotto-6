import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";
import LottoGameController from "./controllers/LottoGameController.js";

class App {
  async play() {
    const lottoPrice = await InputView.getLottoPrice();
    const customer = new Customer(lottoPrice);

    const lottoCount = customer.getLottoCount();
    OutputView.printLottoCount(lottoCount);
    const lottoNumbers = LottoGameController.generateCustomerNumbers(lottoCount);
    customer.setLottoNumbers(lottoNumbers);
  }
}

export default App;