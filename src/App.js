import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoManager from './LottoManager.js';

class App {
  async play() {
    // 기능 ➊ 사용자에게 구입 금액을 입력받는다.
    const money = await InputView.readMoney();
    const amount = money / 1000;
    OutputView.printPurchase(amount);

    // 기능 ➋ 구매 장수만큼 랜덤한 로또 번호를 생성한다.
    const lottoManager = new LottoManager(amount);
    lottoManager.generateLottos();
    OutputView.printLottoNumbers(lottoManager.getLottos());
  }
}

export default App;
