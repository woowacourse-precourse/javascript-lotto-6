import { Lottos } from './Lottos.js';
import { WinningLottosResult } from './lottoGame/result/WinningLottos.js';
import { User } from './User.js';
import { Input } from './interface/Input.js';
import { LottoResult } from './lottoGame/result/Lotto.js';
import Lotto from './Lotto.js';
import { generateRandomNumbers } from './utils/generateRandomNumbers.js';

class App {
  async play() {
    const user = new User();
    await user.inputMoney();

    const count = user.getMoney() / 1000;

    const lottos = new Lottos(count);

    lottos.print();

    await user.inputWinningNumbers();
    await user.inputBonusNumber();

    const lottoResults = lottos
      .get()
      .map((lotto) => new LottoResult(lotto, user.getWinningNumbers(), user.getBonusNumber()));

    const result = new WinningLottosResult(lottoResults, user.getMoney());
    result.print();
  }
}

export default App;
