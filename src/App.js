import {
  inputUserWinningNumber,
  inputUserPurchaseAmount,
  inputUserBonusNumber,
} from './utils.js';
import User from './User.js';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    const purchaseAmount = await inputUserPurchaseAmount();
    const user = new User(purchaseAmount);
    const userWinningNumberInput = await inputUserWinningNumber();
    const bonusNumber = await inputUserBonusNumber();
    const lotto = new Lotto(userWinningNumberInput, bonusNumber);
    const lottoGame = new LottoGame(
      user.issuedLottoNumberList,
      lotto.getNumbers(),
      lotto.getBonusNumber(),
    );
    lottoGame.printResult();
    lottoGame.printProfit();
  }
}

export default App;
