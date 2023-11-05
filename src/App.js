import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    // 기능 ➊ 사용자에게 구입 금액을 입력받는다.
    const money = await InputView.readMoney();

    OutputView.printPurchase(money / 1000);
  }
}

export default App;
