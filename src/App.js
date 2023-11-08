import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { arraySort } from './utils/arrayUtils.js';
import view from './utils/view.js';

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  async setLottoGameConfig() {
    this.purchaseLottos = await view.readPurchaseLottos();
    this.winningNumbers = await view.readWinningNumbers();
    this.bonusNumber = await view.readBonusNumber(this.winningNumbers);
  }

  getLotto() {
    let i;

    for (i = 0; this.purchaseLottos > i; i += 1) {
      const numbers = arraySort(Random.pickUniqueNumbersInRange(1, 45, 6));

      this.lottos.push(new Lotto(numbers));
    }

    view.printPurchaseLottoCount(this.purchaseLottos);
    this.lottos.forEach(item => Console.print(item.getString()));
  }

  async play() {
    await this.setLottoGameConfig();
    this.getLotto();
  }
}

export default App;
