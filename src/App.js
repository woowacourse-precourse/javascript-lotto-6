import { Console } from '@woowacourse/mission-utils';
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
    const user = await userInputController();
    await userWinningNumberController(user);
  }
}

async function userInputController() {
  while (true) {
    try {
      const purchaseAmount = await inputUserPurchaseAmount();
      const user = new User(purchaseAmount);
      return user;
    } catch (e) {
      Console.print(`[ERROR] ${e}`);
    }
  }
}

async function userWinningNumberController(user) {
  while (true) {
    try {
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
      return;
    } catch (e) {
      Console.print(`[ERROR] ${e}`);
    }
  }
}

export default App;
