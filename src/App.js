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

    // 기능 ➌ 사용자에게 당첨 번호를 입력받는다.
    const winNumbers = await InputView.readWinNumbers();
    lottoManager.generateWinLotto(winNumbers);

    // 기능 ➍ 사용자에게 보너스 번호를 입력받는다.
    const bonusNumber = await InputView.readBonusNumber();
    lottoManager.setBonusNumber(bonusNumber);

    // ➎ 당첨 로또 번호와 구매한 로또 번호를 비교한다.
    const prize = lottoManager.getWinCount();
    OutputView.printPrize(prize);
  }
}

export default App;
