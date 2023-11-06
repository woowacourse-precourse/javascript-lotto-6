import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoStore from './Lotto/domain/LottoStore.js';
import UserInput from './Lotto/domain/UserInput.js';
import ErrorList from './Lotto/domain/ErrorList.js';
import Output from './Lotto/domain/Output.js';

class App {
  async play() {
    const LOTTO = [];

    const MONEY = await UserInput.money();
    LottoStore.buyLotto(MONEY, LOTTO);
    ErrorList.buyLotto(MONEY);
    Output.lottoNumbers(MONEY, LOTTO);

    const WIN_NUMBER = await UserInput.winNumber();
    const BONUS_NUMBER = await UserInput.bonusNumber();
  }
}
export default App;
