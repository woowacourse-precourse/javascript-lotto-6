import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";
import Lotto from "./Lotto.js";
import LottoTotal from "./models/LottoTotal.js";
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

    const temp = await InputView.getWinningNumbers();
    const winningNumbers = temp.split(',').map((number) => Number(number));
    const lotto = new Lotto(winningNumbers);
    
    const bonusNumber = await InputView.getBonusNumber();
    const lottoTotal = new LottoTotal(lotto, bonusNumber);
  }
}

export default App;