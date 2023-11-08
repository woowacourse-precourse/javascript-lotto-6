import Customer from "./Customer";
import lottoRanking from "./lottoRanking";
import inputHandlers from "../input/inputHandlers";

class App {
  #customer;

  async play() {
    // 초기화
    lottoRanking.initializeRanking();

    // 구입 금액 입력
    const payment = await inputHandlers.inputPayment();

    // 로또 구입
    this.#customer = new Customer(payment);
    this.#customer.buyLottoTickets();

    // 당첨 번호 입력
    const winnigNumbers = await inputHandlers.inputWinningNumbers();
    const bonusNumber = await inputHandlers.inputBonusNumber(winnigNumbers);
  }
}

export default App;
