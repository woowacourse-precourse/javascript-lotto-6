import {
  inputUserWinningNumber,
  inputUserPurchaseAmount,
  inputUserBonusNumber,
} from './utils.js';
import User from './User.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const purchaseAmount = await inputUserPurchaseAmount();
    const user = new User(purchaseAmount);
    const userWinningNumberInput = await inputUserWinningNumber();
    console.log(userWinningNumberInput); // TODO 디버깅용
    const bonusNumber = await inputUserBonusNumber();
    console.log(bonusNumber); // TODO 디버깅용
    const lotto = new Lotto(userWinningNumberInput, bonusNumber);
  }
}

export default App;
