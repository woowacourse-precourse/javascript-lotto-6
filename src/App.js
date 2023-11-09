import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";
import Lotto from "./Lotto.js";
import LottoTotal from "./models/LottoTotal.js";
import LottoGameController from "./controllers/LottoGameController.js";

class App {
  async play() {
    let customer;
    while (true) {
      try {
        const lottoPrice = await InputView.getLottoPrice();
        customer = new Customer(lottoPrice);
        break;
      } catch(e) {
        OutputView.printError(`${e.message}\n`);
      }
    }

    const lottoCount = customer.getLottoCount();
    OutputView.printLottoCount(lottoCount);

    let lottoNumbers;
    while (true) {
      try {
        lottoNumbers = LottoGameController.generateCustomerNumbers(lottoCount);
        customer.setLottoNumbers(lottoNumbers);
        OutputView.printLottoNumbers(customer.getLottoNumbers());
        break;
      } catch(e) {
        OutputView.printError(e.message);
      }
    }
    
    let lotto;
    while (true) {
      try {
        const temp = await InputView.getWinningNumbers();
        const winningNumbers = temp.split(',').map((number) => Number(number));
        lotto = new Lotto(winningNumbers);
        break;
      } catch(e) {
        OutputView.printError(e.message);
      }
    }
    
    let lottoTotal;
    while (true) {
      try {
        const bonusNumber = await InputView.getBonusNumber();
        lottoTotal = new LottoTotal(lotto, bonusNumber);
        break;
      } catch(e) {
        OutputView.printError(e.message);
      }
    }
    
    const matchCounts = LottoGameController.matchRank(
      customer.getLottoNumbers(),
      lottoTotal.getLotto().getNumbers(),
      lottoTotal.getBonusNumber()
    );
    OutputView.printMatchCounts(matchCounts);

    const returnOfInvestment = LottoGameController.returnOfInvestment(
      matchCounts,
      customer.getLottoPrice()
    );
    OutputView.printReturnOfInvestment(returnOfInvestment);
  }
}

export default App;