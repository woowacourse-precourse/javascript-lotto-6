import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoGame } from './LottoGame.js';
import { LottoStatistics } from './LottoStatistics';

export class Start {
  constructor() {
    this.lottoGame = new LottoGame();
  }
  async run() {
    try {
      await this.lottoGame.buyLottos();
      await this.lottoGame.winLottos();
      await this.lottoGame.isBonusNumber();

      const statistics = new LottoStatistics(
        this.lottoGame.playerLottos,
        this.lottoGame.winningNumbers,
        this.lottoGame.bonusNumber,
      );
      statistics.calculateStatistics();
      statistics.printStatistics();
      const rate = statistics.calculateReturnRate(this.lottoGame.playerLottos.length * 1000);
      MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
    } catch (error) {
      throw error;
    }
  }
}
