import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoGame } from '../Domain/LottoGame.js';
import { InputLotto } from './InputLotto.js';
import { LottoStatistics } from '../Domain/LottoStatistics.js';

export class Start {
  constructor() {
    this.lottoGame = new LottoGame();
    this.inputLotto = new InputLotto(this.lottoGame);
  }
  //시작
  async run() {
    await this.inputLotto.buyLottos();
    await this.inputLotto.winLottos();
    await this.inputLotto.isBonusNumber();

    const statistics = new LottoStatistics(
      this.lottoGame.playerLottos, //랜덤 로또 번호
      this.lottoGame.winningNumbers, //당첨 번호
      this.lottoGame.bonusNumber, //보너스 번호
    );
    statistics.calculateStatistics();
    statistics.printStatistics();
    const rate = statistics.calculateReturnRate(this.lottoGame.playerLottos.length * 1000);
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}
