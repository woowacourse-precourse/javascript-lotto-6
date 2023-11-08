import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import LottoManager from './LottoManager.js';
import Bank from './Bank.js';

class App {
  async play() {
    // 기능 ➊ 사용자에게 구입 금액 입력받기
    const money = await InputView.readMoney();
    const amount = money / 1000;
    OutputView.printPurchaseAmount(amount);

    // 기능 ➋ 로또를 구매 장수만큼 발행하기
    const lottoManager = new LottoManager(amount);
    OutputView.printPurchaseNumbers(lottoManager.getLottos());

    // 기능 ➌ 사용자에게 당첨 번호 입력받기
    const winNumbers = await InputView.readWinNumbers();
    lottoManager.generateWinLotto(winNumbers);

    // 기능 ➍ 사용자에게 보너스 번호 입력받기
    const bonusNumber = await InputView.readBonusNumber(winNumbers);
    lottoManager.setBonusNumber(bonusNumber);

    // 기능 ➎ 로또 숫자를 비교하여 당첨 통계를 계산하고 출력
    const prize = lottoManager.getPrizeCount();
    OutputView.printPrize(prize);

    // 기능 ➏ 수익률을 계산하고 출력
    const bank = new Bank(money, prize);
    OutputView.printProfitRate(bank.getProfitRate());
  }
}

export default App;
