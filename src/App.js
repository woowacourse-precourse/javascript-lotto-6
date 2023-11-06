import { inputMoney } from './buyLotto.js';
import { inputWinningNumber } from './winningNumber.js';
import { inputBonusNumber } from './bonusNumber.js';

class App {
  async play() {
    const userLottoList = await inputMoney();
    const winningNumber = await inputWinningNumber();
    const bonusNumber = await inputBonusNumber(winningNumber);
    console.log(bonusNumber);
  }
}

export default App;
