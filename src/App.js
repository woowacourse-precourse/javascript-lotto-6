import UserInput from './module/UserInput.js';
import Output from './module/Output.js';
import Lotto from './Lotto.js';
import ValidateBonus from './module/ValidateBonus.js';
import ValidatePurchase from './module/ValidatePurchase.js';
import purchasedLottoArray from './module/RandomLotto.js';
import matchLotto from './module/Match.js';

class App {
  async play() {
    const purchasedLotto = await UserInput.purchasedLotto();
    const validatePurchase = new ValidatePurchase(purchasedLotto);
    const lottoArray = purchasedLottoArray(purchasedLotto);
    Output.printUserLottos(lottoArray);
    const winningNumbers = await UserInput.winningNumbers();
    const lotto = new Lotto(winningNumbers);
    const bonus = await UserInput.bonusNumber();
    const validateBonus = new ValidateBonus(bonus);
    Output.printWinningStatistics(
      matchLotto(lottoArray, winningNumbers, bonus),
    );
    Output.printTotalReturn(
      purchasedLotto,
      matchLotto(lottoArray, winningNumbers, bonus),
    );
  }
}

export default App;
