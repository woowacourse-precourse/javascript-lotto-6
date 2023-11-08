import Customer from "./Customer.js";
import lottoRanking from "./lottoRanking.js";
import inputHandlers from "../input/inputHandlers.js";

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
    
    // 결과 출력
    this.#customer.lottoResult(winnigNumbers, bonusNumber);
  }
}

export default App;
