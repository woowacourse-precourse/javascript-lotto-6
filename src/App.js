import { inputMoney } from './buyLotto.js';
import { inputWinningNumber } from './winningNumber.js';

class App {
  async play() {
    const userLottoList = await inputMoney();
    const winningNumber = await inputWinningNumber();
  }
}

export default App;
