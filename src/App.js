import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";
import LottoTotal from "./models/lottoTotal.js";
import LottoGameController from "./controllers/LottoGameController.js";

class App {
  async play() {
    const lottoPrice = await InputView.getLottoPrice();

    const customer = new Customer(lottoPrice);
    const lottoCount = customer.getLottoCount();
    const lottoNumbers = LottoGameController.generateCustomerNumbers(lottoCount);
    customer.setLottoNumbers(lottoNumbers);
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoNumbers(customer.getLottoNumbers());

    const winningNumbers = await InputView.getWinningNumbers();
    const bonusNumber = await InputView.getBonusNumber();
    const lottoTotal = new LottoTotal(winningNumbers, bonusNumber);
    
  }
}

export default App;