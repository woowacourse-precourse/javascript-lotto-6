import { MissionUtils } from '@woowacourse/mission-utils';

import LottoGame from './LottoGame.js';

class App {
  constructor() {
    this.lotto = new LottoGame();
  }

  async play() {
    await this.lotto.purchaseLotto.initialize();
    // 구매한 로또 개수를 출력합니다.
    const purchaseResult = await this.lotto.purchaseLotto.alertPurchaseLotto();

    if (
      typeof purchaseResult === 'string' &&
      purchaseResult.includes('[ERROR]')
    ) {
      MissionUtils.Console.print(purchaseResult);
      return;
    }

    const lottoList = await this.lotto.viewLottoList();
    MissionUtils.Console.print(lottoList);
  }
}

export default App;
