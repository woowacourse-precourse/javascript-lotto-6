import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';
import { ErrorMessage } from '../Message';
import GameUtil from './GameUtil';

export default class GameModel {
  constructor() {
    this.LOTTO_COUNT = 0;
    this.LOTTOS = [];
    this.WINNING_NUMBER = [];
    this.BONUS_NUMBER = 0;
    this.util = new GameUtil();
  }

  lottoCount(buyingMoney) {
    const lottoCount = Math.floor(buyingMoney / 1000);
    this.LOTTO_COUNT = lottoCount;
    return lottoCount;
  }

  generateLotto(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(number);
      this.LOTTOS.push(lotto);
    }
  }

  generateWinningNumber(winningNumber) {
    const number = new Lotto(winningNumber);
    this.WINNING_NUMBER = number.getLottoNumber();
  }

  generateBonusNumber(bonusNumber) {
    const duplicateCheckArray = [bonusNumber, ...this.WINNING_NUMBER];
    this.util.bonusNumberValidatro(bonusNumber, duplicateCheckArray);
    this.BONUS_NUMBER = Number(bonusNumber);
  }
}
