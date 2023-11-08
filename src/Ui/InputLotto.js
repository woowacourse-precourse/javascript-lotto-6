import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoGame } from '../Domain/LottoGame.js';

export class InputLotto {
  constructor(lottoGame) {
    this.lottoGame = lottoGame;
  }

  async buyLottos() {
    try {
      const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
      this.lottoGame.buyLottos(cash);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.buyLottos();
      return;
    }
  }

  async winLottos() {
    try {
      const winningNumber = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
      this.lottoGame.winLottos(winningNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.winLottos();
      return;
    }
  }

  async isBonusNumber() {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
      this.lottoGame.isBonusNumber(bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.isBonusNumber();
      return;
    }
  }
}
