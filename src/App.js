import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import { parchasedLotto } from './utils.js';

class App {
  constructor() {
    this.lotto = new Lotto([]);
  }

  async play() {
    await this.lotto.purchaseLotto.initialize();
    // 구매한 로또 개수를 출력합니다.
    parchasedLotto(await this.lotto.purchaseLotto.alertPurchaseLotto());
    // 로또 리스트를 출력합니다.
    MissionUtils.Console.print(await this.lotto.viewLottoList());
  }
}

export default App;
