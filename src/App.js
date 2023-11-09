import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Customer from "./models/Customer.js";
import Lotto from "./Lotto.js";
import LottoTotal from "./models/LottoTotal.js";
import LottoGameController from "./controllers/LottoGameController.js";

class App {
  async play() {
    // 구입금액 입력
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

    // 로또 구매 개수 출력
    const lottoCount = customer.getLottoCount();
    OutputView.printLottoCount(lottoCount);

    // 구매자 로또 번호 출력
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
    
    // 당첨 번호 입력
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
    
    // 보너스 볼 입력
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
    
    // 당첨 통계 출력
    const matchCounts = LottoGameController.matchRank(
      customer.getLottoNumbers(),
      lottoTotal.getLotto().getNumbers(),
      lottoTotal.getBonusNumber()
    );
    OutputView.printMatchCounts(matchCounts);

    // 수익률 출력
    const returnOfInvestment = LottoGameController.returnOfInvestment(
      matchCounts,
      customer.getLottoPrice()
    );
    OutputView.printReturnOfInvestment(returnOfInvestment);
  }
}

export default App;