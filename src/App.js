import Lotto from './Lotto.js';
import lottoStore from './Lotto/domain/LottoStore.js';
import UserInput from './Lotto/domain/UserInput.js';

class App {
  async play() {
    const MONEY = await UserInput.money();

    const WIN_NUMBER = await UserInput.winNumber();
    const BONUS_NUMBER = await UserInput.bonusNumber();
  }
}
export default App;
