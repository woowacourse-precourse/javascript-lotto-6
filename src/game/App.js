import Customer from "./Customer";
import lottoRanking from "./lottoRanking";
import inputHandlers from "../input/inputHandlers";

class App {
  async play() {
    // 초기화
    lottoRanking.initializeRanking();

    // 구입 금액 입력
    const payment = await inputHandlers.inputPayment();
    
    // 로또 구입
    const customer = new Customer(payment);
    customer.buyLottoTickets();

    // 당첨 번호 입력
    const winnigNumbers = await inputHandlers.inputWinningNumbers();
    const bonusNumber = await inputHandlers.inputBonusNumber(winnigNumbers);
    
    // 결과 출력
    customer.lottoResult(winnigNumbers, bonusNumber);
  }
}

export default App;
