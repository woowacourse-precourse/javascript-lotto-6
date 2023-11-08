import LottoMachine from './\bDomain/LottoMachine';
import Lotto from './Lotto';
import LottoUi from './Ui/LottoUi';
class App {
  async play() {
    const purchaseAmount = await LottoUi.inputPurchaseAmount();
    const purchasedLottos = LottoMachine.drawLottos(purchaseAmount);
    LottoUi.printPurchasedLottos(purchaseAmount, purchasedLottos);

    const winningNumbers = await LottoUi.inputWinningNumbers();
    const bonusNumber = await LottoUi.inputBonusNumber();

    const lotto = new Lotto(purchasedLottos);
    const [winningStatus, rateOfReturn] = lotto.result(
      winningNumbers,
      bonusNumber
    );
    LottoUi.printResultOfLotto(winningStatus, rateOfReturn);
  }
}

export default App;
