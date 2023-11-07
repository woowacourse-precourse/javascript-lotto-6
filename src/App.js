import { inputMoney, buyLotto } from './buyLotto.js';
import { inputWinningNumber } from './winningNumber.js';
import { inputBonusNumber } from './bonusNumber.js';
import Result from './Result.js';

class App {
  async play() {
    const amount = await inputMoney();
    const userLottoList = await buyLotto(amount);
    const winningNumber = await inputWinningNumber();
    const resultbonusNumber = await inputBonusNumber(winningNumber);
    const bonusNumber = parseInt(resultbonusNumber, 10);
    const result = new Result(amount);
    result.startNumberComparison(userLottoList, winningNumber, bonusNumber);
  }
}

export default App;
