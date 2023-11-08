import LottoStore from './Lotto/domain/LottoStore.js';
import UserInput from './Lotto/domain/UserInput.js';
import ErrorList from './Lotto/domain/ErrorList.js';
import Output from './Lotto/domain/Output.js';

class App {
  async play() {
    const MONEY = await UserInput.money();
    ErrorList.buyLotto(MONEY);

    const LOTTO = LottoStore.buyLotto(MONEY);
    Output.lottoNumbers(MONEY, LOTTO);

    const WIN_NUMBER = await UserInput.winNumber();
    ErrorList.winNumber(WIN_NUMBER);

    const BONUS_NUMBER = await UserInput.bonusNumber();
  }
}
export default App;
