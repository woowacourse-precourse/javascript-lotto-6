import LottoMachine from './\bDomain/LottoMachine';
import Lotto from './Lotto';
import LottoUi from './Ui/LottoUi';
class App {
  async play() {
    const lottoMachine = new LottoMachine();
    const purchasedLottos = await lottoMachine.purchaseLotto();
    const winningNumbers = await LottoUi.inputWinningNumbers();
    const bonusNumber = await LottoUi.inputBonusNumber();
    const lotto = new Lotto(purchasedLottos);
    lotto.showResultOfLotto(winningNumbers, bonusNumber);
  }
}

export default App;
