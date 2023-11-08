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
    } catch (error) {
      return; // 종료
    }

    try {
      await this.lottoGame.winLottos();
    } catch (error) {
      return; // 종료
    }

    try {
      await this.lottoGame.isBonusNumber();
    } catch (error) {
      return; // 종료
    }

    const statistics = new LottoStatistics(
      this.lottoGame.playerLottos,
      this.lottoGame.winningNumbers,
      this.lottoGame.bonusNumber,
    );
    statistics.calculateStatistics();
    statistics.printStatistics();
    const rate = statistics.calculateReturnRate(this.lottoGame.playerLottos.length * 1000);
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}
