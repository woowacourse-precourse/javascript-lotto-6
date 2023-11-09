import { LottoResult } from './game/lotto/LottoResult.js';
import { Lottos } from './game/lotto/Lottos.js';
import { WinningLottosResult } from './game/result/WinningLottos.js';
import { User } from './User.js';

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
