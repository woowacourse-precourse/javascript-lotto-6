import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { arraySort } from './utils/arrayUtils.js';
import view from './utils/view.js';

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  async setPurchaseLottos() {
    const purchaseLottoCount = await view.readPurchaseLottos();

    let i;

    for (i = 0; purchaseLottoCount > i; i += 1) {
      const numbers = arraySort(Random.pickUniqueNumbersInRange(1, 45, 6));

      this.lottos.push(new Lotto(numbers));
    }
  }

  async setWinningNumbers() {
    this.winningNumbers = await view.readWinningNumbers();
    this.bonusNumber = await view.readBonusNumber(this.winningNumbers);
  }

  async setLottoGameConfig() {
    await this.setPurchaseLottos();
    view.printPurchaseLottoInfo(this.lottos);

    await this.setWinningNumbers();
  }

  async play() {
    await this.setLottoGameConfig();
  }
}

export default App;
