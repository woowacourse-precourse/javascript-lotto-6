import { inputMoney } from './buyLotto.js';
import { inputWinningNumber } from './winningNumber.js';
import { inputBonusNumber } from './bonusNumber.js';
import Result from './Result.js';

class App {
  async play() {
    const userLottoList = await inputMoney();
    const winningNumber = await inputWinningNumber();
    const resultbonusNumber = await inputBonusNumber(winningNumber);
    const bonusNumber = parseInt(resultbonusNumber, 10);
    const result = new Result();
    result.startNumberComparison(userLottoList, winningNumber, bonusNumber);
  }
}

export default App;
